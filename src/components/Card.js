export default class Card {
  constructor (name, link, cardTemplate, imgPopup) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._imgPopup = imgPopup;
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._cardTemplate).content;

    return cardElement.cloneNode(true);
  }

  _setEventListeners () {
    this._delete.addEventListener('click', (evt) => {
      evt.stopPropagation();
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

  _handleLike (evt) {
    this._like.classList.toggle('is-active');
  }

  _handleDelete (evt) {
    this._element.remove();
  }

  _handleCardClick (evt) {
    this._imgPopup.open(this._link, this._name);
  }

  generateCard () {
    const _item = this._getTemplate();
    this._element = _item.querySelector('.element');
    this._delete = _item.querySelector('.btn_type_delete');
    this._like = _item.querySelector('.btn_type_like');
    this._img = _item.querySelector('.element__img');
    this._subtitle = _item.querySelector('.element__subtitle');
    this._setEventListeners();
    this._img.src = this._link;
    this._img.alt = this._name;
    this._subtitle.textContent = this._name;

    return _item;
  }
}
