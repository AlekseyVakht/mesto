import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitBtn = this._popup.querySelector('.popup__submit-btn');
    this._submitBtnText = this._submitBtn.textContent;
  }

  setSubmit(submit) {
    this._handleSubmit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitBtn.textContent = 'Удаляем...';
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }
}