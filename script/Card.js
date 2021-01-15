import { imgPopup, imgPopupLink, imgPopupDesc, showPopup } from './index.js';

export default class Card {
  constructor (name, link, cardTemplate) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
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
      this._handlePopup();
    });
  }

  _handleLike (evt) {
    this._like.classList.toggle('is-active');
  }

  _handleDelete (evt) {
    this._element.remove();
  }

  _handlePopup (evt) {
    imgPopupLink.src = this._link;
    imgPopupDesc.textContent = this._name;
    showPopup(imgPopup);
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
    this._subtitle.textContent = this._name;

    return _item;
  }
}
