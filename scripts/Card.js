export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name[0].toUpperCase() + this._name.slice(1);
    this._element.querySelector('.element__heading').textContent = this._name[0].toUpperCase() + this._name.slice(1);
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-icon').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__like-icon').addEventListener('click', this._toggleLike);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like-icon_active');
  }
}