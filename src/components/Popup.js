export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open () {
    this._popup.classList.remove('popup_hidden');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close () {
    this._popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose (evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
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
