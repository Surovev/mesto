import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import '../pages/index.css';
// import SubmitPopup from '../components/SubmitPopup.js';
// экспортируем и создаем экземпляр классов

const apiOptions = {
  authorization: 'fd8146ec-08ee-4ae1-b040-cf6a41d6c968',
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  cohort: 'cohort-20/',
  myId: '30cf101270929ac519fc83f3'
};
const api = new Api(apiOptions);
const userInfo = new UserInfo({ name: '.profile__title', desc: '.profile__subtitle' });

function renderLoading (isLoading, submitBtn) {
  if (isLoading) {
    submitBtn.textContent = 'Сохранение..';
  } else {
    submitBtn.textContent = 'Сохранить';
  }
}

// попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы

const imgPopup = new PopupWithImage('.js-popup-img');

export const popupProfile = new PopupWithForm('.js-popup-profile', (data) => { // отправляем данные из инпутов профайла на сервер и обновляем на странице
  const submitBtn = document.querySelector('.js-profile-submit');
  api.getUserInfo(data);
  renderLoading(true, submitBtn);
  api.setUserInfo().then((res) => {
    userInfo.setUserInfo(res);
    popupProfile.close();
  })
    .finally((res) => {
      renderLoading(false, submitBtn);
    });
});
const popupPlace = new PopupWithForm('.js-popup-place', (data) => {
  const submitBtn = document.querySelector('.js-place-submit');
  renderLoading(true, submitBtn);
  api.addCard(data)
    .then((cardInfo) => {
      addCard(cardInfo, cardInfo.owner._id, apiOptions.myId);
      popupPlace.close();
    })
    .finally((res) => {
      renderLoading(false, submitBtn);
    });
});

const popupAvatar = new PopupWithForm('.js-popup-avatar', (data) => {
  const submitBtn = document.querySelector('.js-avatar-submit');
  renderLoading(true, submitBtn);
  api.updateAvatar(data)
    .then((res) => {
      submitBtn.textContent = 'Сохранить';
      userInfo.setUserInfo(res);
      popupAvatar.close();
    })
    .finally((res) => {
      renderLoading(false, submitBtn);
    });
});

function addLike (card) {
  return api.addLike(card._itemId).then(res => {
    card.setLikeState(res);
    return res;
  });
}
function removeLike (card) {
  return api.removeLike(card._itemId).then(res => {
    card.setLikeState(res);
    return res;
  });
}
// попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы попапы
// Находим форму в DOM
const cardsContainer = document.querySelector('.elements');
const editButton = document.querySelector('.btn_type_pencil');
const addButton = document.querySelector('.btn_type_add');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileDescInput = document.querySelector('.popup__input_type_desc');
const profileAvatar = document.querySelector('.profile__avatar');
const forms = document.querySelectorAll('.popup__container');
const avatarButton = document.querySelector('.profile__avatar');

addButton.addEventListener('click', () => popupPlace.open());

avatarButton.addEventListener('click', () => popupAvatar.open());

editButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileDescInput.value = data.desc;
  profileAvatar.src = data.avatar;
  popupProfile.open();
});
const deletePopup = new PopupWithForm('.js-popup-delete', (inputs, card) => {
  api.deleteCard(card._itemId)
    .then(res => {
      deletePopup.close();
      card.handleDelete();
    });
});

function addCard (data, ownerId, myId, cardId) {
  const card = new Card(data, ownerId, myId, '#card-template', imgPopup, (cardId) => deletePopup.open(card), (card) => addLike(card), (card) => removeLike(card));

  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
}

api.getInitialCards().then((data) => {
  const section = new Section({ // создание карточек при загрузке страницы
    items: data,
    renderer: (item) => {
      addCard(item, item.owner._id, apiOptions.myId, item._id);
    }
  }, '#card-template');

  section.renderItems();
});

api.setUserInfo().then((data) => {
  // добавление данный в профайл при загрузке страницы
  userInfo.setUserInfo(data);
});

// создаем карточки по дефолту

const options = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.btn_type_text',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup-error'
};
forms.forEach(item => {
  const formValidator = new FormValidator(options, item);
  formValidator.enableValidation();
});
