export class Card {
  constructor({
      data,
      userId,
      handleCardClick,
      handleCardDelete,
      handleCardLike,
      handleCardLikeRemove
    },
      templateSelector) {

    this.data = data;
    this._name = data.name;
    this._link = data.link;

    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._owner = data.owner;
    this._userIdCard = data.owner._id;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._handleCardLikeRemove = handleCardLikeRemove;
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

    this._deleteIcon = this._element.querySelector('.element__delete-icon');
    this._likeIcon = this._element.querySelector('.element__like-icon');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__heading').textContent = this._name;
    this.showLikes(this.data)

    if (this._userIdCard === this._userId) {
      this._deleteIcon.classList.add('element__delete-icon_active');
    }
    this._setEventListeners();
    return this._element;
  }

  getId() {
    return this._id;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  cardLike() {
    return this._likes.find((data) => data._id === this._userId)
  }

  showLikes(card){
    this._likes = card.likes
    if (this._likes.length === 0) {
      this._likeCounter.textContent = ''
    }
    else {
      this._likeCounter.textContent = this._likes.length
    }
    if (this.cardLike()) {
      this._likeIcon.classList.add('element__like-icon')
    }
    else {
      this._likeIcon.classList.remove('element__like-icon')
    }
  }

  clickLike() {
    if (this.cardLike()) {
      this._handleCardLikeRemove(this._id);
    } else {
      this._handleCardLike(this._id);
    }
  }

  _setEventListeners() {
    this._deleteIcon.addEventListener('click', () => {
      this._handleCardDelete();
    });

    this._likeIcon.addEventListener('click', () => {
      this.clickLike();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }
}