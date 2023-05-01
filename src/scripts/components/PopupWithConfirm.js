import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitBtn = this._popup.querySelector('.popup__submit-btn');
    this._submitBtnText = this._submitBtn.text;
  }

  setSubmit(submit) {
    this._handleSubmit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
      this.close();
    });
  }

  loading(isLoading, text) {
    if (isLoading) {
      this._submitBtnText = text;
    } else {
      this._submitBtnText = text;
    }
  }
}