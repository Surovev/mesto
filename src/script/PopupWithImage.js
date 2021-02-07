import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._img = this._popup.querySelector('.popup-img__background-img');
    this._desc = this._popup.querySelector('.popup-img__subtitle');
    this.setEventListeners();
  }

  open (src, desc) {
    super.open();
    this._img.src = src;
    this._desc.textContent = desc;
  }
}
