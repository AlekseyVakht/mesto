import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(handleCardDelete, popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleCardDelete = handleCardDelete;
    this._submitBtn = this._popup.querySelector('.popup__submit-btn');
    this._submitBtnText = this._submitBtn.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleCardDelete();
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