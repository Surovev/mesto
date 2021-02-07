import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';
// экспортируем и создаем экземпляр классов
export const userInfo = new UserInfo({ name: '.profile__title', desc: '.profile__subtitle' });
export const imgPopup = new PopupWithImage('.js-popup-img');
export const popupProfile = new PopupWithForm('.js-popup-profile', (data) => userInfo.setUserInfo(data));
export const popupPlace = new PopupWithForm('.js-popup-place', (data) => { addCard(data.subtitle, data.link); });
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
const cardsContainer = document.querySelector('.elements');
const editButton = document.querySelector('.btn_type_pencil');
const addButton = document.querySelector('.btn_type_add');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileDescInput = document.querySelector('.popup__input_type_desc');

addButton.addEventListener('click', () => popupPlace.open());

editButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileDescInput.value = data.desc;
  popupProfile.open();
});

function addCard (cardName, img) {
  const card = new Card(cardName, img, '#card-template', imgPopup);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    addCard(item.name, item.link);
  }
}, '#card-template');

section.addItem();
