
export default class FormValidator {
  constructor (config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    this._inputElements = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    formElement.validator = this;
  }

  enableValidation () {
    this.toggleButtonState();
    this._inputElements.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
      });
    });
    this._formElement.addEventListener('reset', () => {
      this._inputElements.forEach((inputElement) => {
        inputElement.value = ''; // поля очищаются позже ресета, по этому без этого костыля toggleButtonState работал не так как хочется.
        this._hideError(inputElement);
      });
      this.toggleButtonState();
    });
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
  }

  _showError (input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    error.classList.add(this._config.errorClass);
    error.textContent = input.validationMessage;
  }

  _hideError (input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    error.classList.remove(this._config.errorClass);
    error.textContent = '';
  }

  toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    } else {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }

  _hasInvalidInput (input) {
    return this._inputElements.some((input) => {
      return !input.validity.valid;
    });
  }

  _validateInput (input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
    this.toggleButtonState();
  }
}
