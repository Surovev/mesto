
import Popup from './Popup.js';

export default class SubmitPopup extends Popup {
  constructor (selector, callback) {
    super(selector);
    this._form = this._popup.querySelector('.popup__container');
    this._callback = callback;
    this.setEventListeners();
  }

  close () {
    super.close();
  }

  open (data) {
    this._data = data;
    super.open();
  }

  setEventListeners (data) {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callback(this._data);
      this.close();
    });
  }
}
