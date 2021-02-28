export default class Card {
  constructor ({ options, ownerId, myId, cardTemplate, imgPopupCallback, deletePopup, addLikeCallback, removeLikeCallback }) {
    this._data = options;
    this._name = options.name;
    this._link = options.link;
    this._itemId = options._id;
    this._ownerId = ownerId;
    this._cardTemplate = cardTemplate;
    this._imgPopupCallback = imgPopupCallback;
    this._deletePopup = deletePopup;
    this._myId = myId;
    this._addLike = addLikeCallback;
    this._removeLike = removeLikeCallback;
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._cardTemplate).content;

    return cardElement.cloneNode(true);
  }

  _setEventListeners () {
    this._delete.addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._deletePopup(this);
    });

    this._like.addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._handleLike();
    });
    this._img.addEventListener('click', (evt) => {
      this._handleCardClick();
    });
  }

  _setDeleteButton () {
    if (this._ownerId !== this._myId) {
      this._delete.remove();
    }
  }

  _handleLike () {
    if (!this.data.likes.some(elem => elem._id === this._myId)) {
      this._addLike(this);
    } else {
      this._removeLike(this);
    }
  }

  setLikeState (data) {
    this.data = data;
    if (this.data.likes.some(elem => elem._id === this._myId)) {
      this._like.classList.add('is-active');
    } else {
      this._like.classList.remove('is-active');
    }
    this._likeCounter.textContent = this.data.likes.length;
  }

  handleDelete () {
    this._element.remove();
  }

  _handleCardClick (evt) {
    this._imgPopupCallback();
  }

  generateCard () {
    const _item = this._getTemplate();
    this._element = _item.querySelector('.element');
    this._delete = _item.querySelector('.btn_type_delete');
    this._like = _item.querySelector('.btn_type_like');
    this._img = _item.querySelector('.element__img');
    this._likeCounter = _item.querySelector('.element__like-counter');
    this._subtitle = _item.querySelector('.element__subtitle');
    this._setEventListeners();
    this._setDeleteButton();
    this._img.src = this._link;
    this._img.alt = this._name;
    this._subtitle.textContent = this._name;
    this.setLikeState(this._data);

    return _item;
  }
}
