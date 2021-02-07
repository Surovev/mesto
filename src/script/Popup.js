export default class Popup {
  //   Принимает в конструктор единственный параметр — селектор попапа.
  // Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
  // Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
  // Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose();
  }

  open () {
    this._popup.classList.remove('popup_hidden');
  }

  close () {
    this._popup.classList.add('popup_hidden');
  }

  _handleEscClose () {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    });
  }

  setEventListeners () {
    const closeButton = this._popup.querySelector('.btn_type_close');
    closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
