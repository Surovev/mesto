const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Находим форму в DOM
const formElements = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.elements');
const profilePopup = document.querySelector('.js-popup-profile');
const placePopup = document.querySelector('.js-popup-place');
const imgPopup = document.querySelector('.js-popup-img');
const editButton = document.querySelector('.btn_type_pencil');
const addButton = document.querySelector('.btn_type_add');
const profileName = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__subtitle');
const imgPopupLink = imgPopup.querySelector('.popup-img__background-img');
const imgPopupDesc = imgPopup.querySelector('.popup-img__subtitle');

profilePopup.addEventListener('submit', formSubmitHandler);

placePopup.addEventListener('submit', formAddCard);

addButton.addEventListener('click', () => showPopup(placePopup));

editButton.addEventListener('click', () => showPopup(profilePopup));

function showPopup (popup) {
  popup.classList.remove('popup_hidden');
}

function closePopup (popup) {
  popup.classList.add('popup_hidden');
}

function addCard (name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  card.querySelector('.element__img').src = link;
  card.querySelector('.element__subtitle').textContent = name;
  const likeButton = card.querySelector('.btn_type_like');
  const deleteButton = card.querySelector('.btn_type_delete');

  card.addEventListener('click', (evt) => {
    imgPopupDesc.textContent = name;
    imgPopupLink.src = link;
    showPopup(imgPopup);
  });

  deleteButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    card.remove();
  });

  likeButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    likeButton.classList.toggle('is-active');
  });
  cardsContainer.append(card);
}

formElements.forEach(element => {
  const closeButton = element.querySelector('.btn_type_close');
  closeButton.addEventListener('click', () => closePopup(element)
  );
});

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector('.popup__input_type_name');
  const jobInput = document.querySelector('.popup__input_type_desc');
  profileName.textContent = nameInput.value;
  profileDesc.textContent = jobInput.value;
  nameInput.value = '';
  jobInput.value = '';

  closePopup(profilePopup);
}

function formAddCard (evt) {
  evt.preventDefault();
  const descInput = document.querySelector('.popup__input_type_subtitle');
  const linkInput = document.querySelector('.popup__input_type_link');
  addCard(descInput.value, linkInput.value);
  descInput.value = '';
  linkInput.value = '';
  closePopup(placePopup);
}

initialCards.forEach(element => {
  addCard(element.name, element.link);
});

// validation validation validation validation validation validation validation validation

// const form = document.querySelector('.popup__container');
// const inputElement = form.querySelector('.popup__input');

// inputElement.addEventListener('input', (evt) => {
//   const error = form.querySelector(`#${inputElement.id}-error`);
//   const button = form.querySelector('.btn_type_text');
//   if (!inputElement.validity.valid) {
//     error.classList.add('popup__error_visible');
//     error.textContent = inputElement.validationMessage;
//     button.classList.add('btn_disabled');
//     console.log(inputElement.validationMessage);
//   } else {
//     error.classList.remove('popup__error_visible');
//     error.textContent = '';
//     button.classList.remove('btn_disabled');
//   }
// });

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
    button.setAttribute('disabled', false);
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
