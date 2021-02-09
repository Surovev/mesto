import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._form = this._popup.querySelector('.popup__container');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this.setEventListeners();
  }

  _getInputValues () {
    const inputsValue = {};
    this._inputs.forEach(element => {
      inputsValue[element.name] = element.value;
    });

    return inputsValue;
  }

  close () {
    super.close();
    this._form.reset();
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBack(this._getInputValues());
      this.close();
    });
  }
}
