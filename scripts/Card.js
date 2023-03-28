import {togglePopup} from "./index.js";

const popupImage = document.querySelector('.popup__image');
const popupImageCapture = document.querySelector('.popup__image-capture');
const popupImageScaler = document.querySelector('#popup-image-scaler');

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name[0].toUpperCase() + this._name.slice(1);
    this._element.querySelector('.element__heading').textContent = this._name[0].toUpperCase() + this._name.slice(1);
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    });
    this._element.querySelector('.element__delete-icon').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__like-icon').addEventListener('click', this._toggleLike);
  }

  _handleCardClick() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageCapture.textContent = this._name;
    togglePopup(popupImageScaler);
  }

  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like-icon_active');
  }
}