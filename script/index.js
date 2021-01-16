import Card from './Card.js';
import FormValidator from './FormValidator.js';
export const imgPopup = document.querySelector('.js-popup-img');
export const imgPopupLink = imgPopup.querySelector('.popup-img__background-img');
export const imgPopupDesc = imgPopup.querySelector('.popup-img__subtitle');
export function showPopup (popup) {
  popup.classList.remove('popup_hidden');
  actualPopup = popup;
}

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

const editButton = document.querySelector('.btn_type_pencil');
const addButton = document.querySelector('.btn_type_add');
const profileName = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__subtitle');

profilePopup.addEventListener('submit', formSubmitHandler);

placePopup.addEventListener('submit', formAddCard);

addButton.addEventListener('click', () => showPopup(placePopup));

editButton.addEventListener('click', () => showPopup(profilePopup));

let actualPopup;

document.addEventListener('keydown', (evt) => {
  if (actualPopup != null && evt.key === 'Escape') {
    closePopup(actualPopup);
  }
});

function closePopup (popup) {
  popup.classList.add('popup_hidden');
  actualPopup = null;
}

formElements.forEach(element => {
  const closeButton = element.querySelector('.btn_type_close');
  closeButton.addEventListener('click', () => closePopup(element)
  );
  element.addEventListener('click', (evt) => {
    if (evt.target === element) {
      closePopup(element);
    }
  });
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

function addCard (cardName, img) {
  const card = new Card(cardName, img, '#card-template');
  const cardElement = card.generateCard();

  cardsContainer.append(cardElement);
}

initialCards.forEach(element => {
  addCard(element.name, element.link);
});
const options = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.btn_type_text',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup-error'
};

const formList = Array.from(document.querySelectorAll(options.formSelector));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(options, formElement);
  formValidator.enableValidation();
});
