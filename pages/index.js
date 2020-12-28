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

let actualPopup;

document.addEventListener('keydown', (evt) => {
  if (actualPopup != null && evt.key.toLocaleLowerCase() === 'escape') {
    closePopup(actualPopup);
  }
});

function showPopup (popup) {
  popup.classList.remove('popup_hidden');
  actualPopup = popup;
}

function closePopup (popup) {
  popup.classList.add('popup_hidden');
  actualPopup = null;
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

initialCards.forEach(element => {
  addCard(element.name, element.link);
});
