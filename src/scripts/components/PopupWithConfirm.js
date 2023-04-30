import { PopupWithForm } from './PopupWithForm.js';

export class PopupWithConfirm extends PopupWithForm {
  constructor({handleFormSubmit, popupSelector}) {
    super({handleFormSubmit, popupSelector});
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
}