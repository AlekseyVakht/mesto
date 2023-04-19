import { Popup } from './Popup.js';
import { popupImage, popupImageCapture } from '../utils/constants.js';

export class PopupWithImage extends Popup {
  constructor({ image, alt, text }, popupSelector) {
    super(popupSelector);
    this._image = image;
    this._alt = alt;
    this._text = text;
  }

  open() {
    super.open();
    popupImage.src = this._image;
    popupImage.alt = this._alt;
    popupImageCapture.textContent = this._text;
  }
}