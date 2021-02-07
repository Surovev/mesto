export default class Popup {
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
