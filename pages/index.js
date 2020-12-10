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

function showPopup (popup) {
  popup.classList.remove('popup_hidden');
}

function addCard (name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.element').cloneNode(true);

  card.querySelector('.element__img').src = link;
  card.querySelector('.element__subtitle').textContent = name;
  const likeButton = card.querySelector('.btn_type_like');
  const deleteButton = card.querySelector('.btn_type_delete');

  card.addEventListener('click', function (evt) {
    evt.stopPropagation();
    const imgPopupLink = imgPopup.querySelector('.popup-img__background-img');
    const imgPopupDesc = imgPopup.querySelector('.popup-img__subtitle');
    imgPopupDesc.textContent = name;
    imgPopupLink.src = link;
    showPopup(imgPopup);
  });

  deleteButton.addEventListener('click', function (evt) {
    evt.stopPropagation();
    card.remove();
  });

  likeButton.addEventListener('click', function (evt) {
    evt.stopPropagation();
    likeButton.classList.toggle('is-active');
  });
  cardsContainer.append(card);
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

profilePopup.addEventListener('submit', formSubmitHandler);

placePopup.addEventListener('submit', formAddCard);

initialCards.forEach(element => {
  addCard(element.name, element.link);
});
