
const formElement = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');
const pencil = document.querySelector('.btn_type_pencil');
const close = document.querySelector('.btn_type_close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_desc');


function showPopup() {
    popup.classList.remove('popup_hidden');
    nameInput.focus();
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}
pencil.addEventListener('click', showPopup);

function removePopup() {
    popup.classList.add('popup_hidden');
}
close.addEventListener('click', removePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();


    const jobValue = jobInput.value;
    const nameValue = nameInput.value;
    profileTitle.textContent = nameValue;
    profileSubtitle.textContent = jobValue;
    removePopup();
}



formElement.addEventListener('submit', formSubmitHandler);



