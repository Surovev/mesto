export default class Card {
  constructor (data, ownerId, myId, cardTemplate, ImgPopup, deletePopup, addLike, removeLike) {
    this.data = data;
    this._name = data.name;
    this._link = data.link;
    this._itemId = data._id;
    this._likes = data.likes;
    this._ownerId = ownerId;
    this._cardTemplate = cardTemplate;
    this._ImgPopup = ImgPopup;
    this._deletePopup = deletePopup;
    this._myId = myId;
    this._addLike = addLike;
    this._removeLike = removeLike;
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._cardTemplate).content;

    return cardElement.cloneNode(true);
  }

  _setEventListeners () {
    this._delete.addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._deletePopup(this._itemId);
      // console.log(this._cardId);
      this._handleDelete();
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

  _handleLike (evt) {
    this._like.classList.toggle('is-active');
    if (!this._like.classList.contains('is-active')) {
      this._addLike(this._itemId);
      this._like.classList.add('is-active');

      this.likeState();
    } else {
      this._removeLike(this._itemId);
      this._like.classList.remove('is-active');
      console.log(this._likes);
      console.log(this._owneriId);
      console.log(this._likes.includes(this._ownerId));
      this.likeState();
    }
  }

  likeState () {
    this._likeCounter.textContent = this._likes.length;
  }

  _handleDelete (evt) {
    this._element.remove();
  }

  _handleCardClick (evt) {
    this._ImgPopup.open(this._link, this._name);
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
    this._handleLike();
    this.likeState();

    return _item;
  }
}
