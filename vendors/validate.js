
function enableValidation (config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((form) => {
    setInputListeners(config, form);
  });
}

function showError (config, formElement, inputElement) {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.classList.add(config.errorClass);
  error.textContent = inputElement.validationMessage;
}

function hideError (config, formElement, inputElement) {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.classList.remove(config.errorClass);
  error.textContent = '';
}

function toggleButtonState (config, inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', true);
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
  }
}

function hasInvalidInput (inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function setInputListeners (config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const button = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(config, inputList, button);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      if (!input.validity.valid) {
        showError(config, formElement, input);
      } else {
        hideError(config, formElement, input);
      }
      toggleButtonState(config, inputList, button);
    });
  });
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.btn_type_text',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
