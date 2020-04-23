
let formElement = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let pencil = document.querySelector('.btn_type_pencil');
let close = document.querySelector('.btn_type_close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_desc');


function showPopup() {
    popup.classList.remove('popup_hidden');
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


    let jobValue = jobInput.value;
    let nameValue = nameInput.value;
    profileTitle.textContent = nameValue;
    profileSubtitle.textContent = jobValue;
    removePopup();
}


formElement.addEventListener('submit', formSubmitHandler);



