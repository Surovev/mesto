import Popup from './Popup.js';
import FormValidator from './FormValidator.js';
export default class PopupWithForm extends Popup {
  constructor (popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._form = this._popup.querySelector('.popup__container');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this.setEventListeners();

    this._validateInputs();
  }

  _getInputValues () {
    const inputsValue = {};
    this._inputs.forEach(element => {
      inputsValue[element.name] = element.value;
    });

    return inputsValue;
  }

  _validateInputs () {
    const options = {
      formSelector: '.popup__container',
      inputSelector: '.popup__input',
      submitButtonSelector: '.btn_type_text',
      inactiveButtonClass: 'btn_disabled',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup-error'
    };
    this._formValidator = new FormValidator(options, this._form);
    this._formValidator.enableValidation();
  }

  close () {
    super.close();
    this._form.reset();
    this._formValidator.toggleButtonState();
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
