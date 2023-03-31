export class FormValidator {
  constructor(options, formElement){
    this._form = formElement;
    this._options = options;
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._options.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._options.errorClass);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._options.inputErrorClass);
    this._errorElement.classList.remove(this._options.errorClass);
    this._errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._options.inputSelector));
    this._submitButton = this._form.querySelector(this._options.submitButtonSelector);
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }

  toggleButtonState() {
    const isFormValid = this._form.checkValidity()
    this._submitButton.disabled = !isFormValid
    this._submitButton.classList.toggle(this._options.inactiveButtonClass, !isFormValid)
  }

  enableValidation() {
    this._setEventListeners();
  }
}