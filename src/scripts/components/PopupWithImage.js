import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    super.setEventListeners();
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageCapture = this._popup.querySelector('.popup__image-capture');
  }

  open({ image, alt, text }) {
    super.open();
    this._image = image;
    this._alt = alt;
    this._text = text;
    this._popupImage.src = this._image;
    this._popupImage.alt = this._alt;
    this._popupImageCapture.textContent = this._text;
  }
}