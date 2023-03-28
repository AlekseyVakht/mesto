export class FormValidator {
  constructor(options, formElement){
    this._form = formElement;
    this._options = options;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._options.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClass);
    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._options.inputSelector));
    const buttonElement = this._form.querySelector(this._options.submitButtonSelector);
    this._toggleButtonState(buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(buttonElement);
      });
    });
  }

  _toggleButtonState(buttonElement) {
    const isFormValid = this._form.checkValidity()
    buttonElement.disabled = !isFormValid
    buttonElement.classList.toggle(this._options.inactiveButtonClass, !isFormValid)
  }

  enableValidation() {
    this._setEventListeners();
  }
}