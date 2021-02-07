import Popup from './Popup.js';
import FormValidator from './FormValidator.js';
import { userInfo } from './index.js';
// import userInfo from './index.js';
export default class PopupWithForm extends Popup {
  //   Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
  // Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
  // Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
  // Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
  // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
  // Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
  constructor (popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._form = this._popup.querySelector('.popup__container');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this.setEventListeners();

    this._validateInputs();
  }

  _getInputValues () {
    // создает обьект с инпутами и их значениями
    const inputsValue = {};
    this._inputs.forEach(element => {
      inputsValue[element.name] = element.value;
    });
    // console.log(this._inputsValue);
    console.log(inputsValue);
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
