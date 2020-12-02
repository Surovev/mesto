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
// const submitButton = document.querySelector('.btn_type_text');

function showPopup (popup) {
  popup.classList.remove('popup_hidden');
}

function addCard (name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__img').src = link;
  cardElement.querySelector('.element__subtitle').textContent = name;
  const likeButton = cardElement.querySelector('.btn_type_like');
  const deleteButton = cardElement.querySelector('.btn_type_delete');

  deleteButton.addEventListener('click', function () {
    const imgPopupLink = imgPopup.querySelector('.popup__background-img');
    imgPopupLink.src = link;
    showPopup(imgPopup);
  });

  // deleteButton.addEventListener('click', function () {
  //   const card = cardTemplate.querySelector('.element');
  //   cardTemplate.remove();
  // });

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('is-active');
  });
  cardsContainer.append(cardElement);
}

function closePopup (popup) {
  popup.classList.add('popup_hidden');
}

addButton.addEventListener('click', function () {
  showPopup(placePopup);
});

editButton.addEventListener('click', function () {
  showPopup(profilePopup);
});

formElements.forEach(element => {
  const closeButton = element.querySelector('.btn_type_close');
  closeButton.addEventListener('click', () => {
    element.classList.add('popup_hidden');
  });
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault();
  const closeButton = profilePopup.querySelector('.btn_type_close');
  const nameInput = document.querySelector('.popup__input_type_name');
  const jobInput = document.querySelector('.popup__input_type_desc');
  profileName.textContent = nameInput.value;
  profileDesc.textContent = jobInput.value;
  closeButton.addEventListener('click', function () {
    closePopup(profilePopup);
  });
  closePopup(profilePopup);
}

function formAddCard (evt) {
  evt.preventDefault();
  const closeButton = placePopup.querySelector('.btn_type_close');

  const descInput = document.querySelector('.popup__input_type_subtitle');
  const linkInput = document.querySelector('.popup__input_type_link');
  addCard(descInput.value, linkInput.value);

  closeButton.addEventListener('click', function () {
    closePopup(placePopup);
  });
  closePopup(placePopup);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profilePopup.addEventListener('submit', formSubmitHandler);

placePopup.addEventListener('submit', formAddCard);

// карточки

initialCards.forEach(element => {
  addCard(element.name, element.link);
});
