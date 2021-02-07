import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.
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
