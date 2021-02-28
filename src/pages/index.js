import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import '../pages/index.css';
const submitBtnProfile = document.querySelector('.js-profile-submit');
const submitBtnPlace = document.querySelector('.js-place-submit');
const submitBtnAvatar = document.querySelector('.js-avatar-submit');
// экспортируем и создаем экземпляр классов

const apiOptions = {
  authorization: 'fd8146ec-08ee-4ae1-b040-cf6a41d6c968',
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  cohort: 'cohort-20/'
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
  renderLoading(true, submitBtnProfile);
  api.setUserInfo(data).then((res) => {
    userInfo.setUserInfo(res);
    popupProfile.close();
  })
    .finally((res) => {
      renderLoading(false, submitBtnProfile);
    });
});
const popupPlace = new PopupWithForm('.js-popup-place', (data) => {
  renderLoading(true, submitBtnPlace);
  api.addCard(data)
    .then((cardInfo) => {
      addCard(cardInfo, cardInfo.owner._id, apiOptions.myId);
      popupPlace.close();
    })
    .finally((res) => {
      renderLoading(false, submitBtnPlace);
    });
});

const popupAvatar = new PopupWithForm('.js-popup-avatar', (data) => {
  renderLoading(true, submitBtnAvatar);
  api.updateAvatar(data)
    .then((res) => {
      submitBtnAvatar.textContent = 'Сохранить';
      userInfo.setUserInfo(res);
      popupAvatar.close();
    })
    .finally((res) => {
      renderLoading(false, submitBtnAvatar);
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
const forms = document.querySelectorAll('.popup__container');
const avatarButton = document.querySelector('.profile__avatar');

addButton.addEventListener('click', () => popupPlace.open());

avatarButton.addEventListener('click', () => popupAvatar.open());

editButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileDescInput.value = data.desc;
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
  const card = new Card({
    options: data,
    ownerId: ownerId,
    myId: myId,
    cardTemplate: '#card-template',
    imgPopupCallback: () => imgPopup.open(data.link, data.name),
    deletePopup: (cardId) => deletePopup.open(cardId),
    addLikeCallback: (card) => addLike(card),
    removeLikeCallback: (card) => removeLike(card)
  });

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

api.getUserInfo().then((data) => {
  // добавление данный в профайл при загрузке страницы
  userInfo.setUserInfo(data);
  apiOptions.myId = data._id;
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
