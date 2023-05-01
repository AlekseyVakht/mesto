import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageCapture = this._popup.querySelector('.popup__image-capture');
  }

  open(alt, src) {
    super.open();
    this._popupImage.src = src;
    this._popupImage.alt = alt;
    this._popupImageCapture.textContent = alt;
  }
}