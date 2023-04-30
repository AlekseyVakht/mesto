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

    this._name = data.name;
    this._link = data.link;

    this._likes = data.likes;
    this._id = data.id;
    this._userId = userId;
    this._owner = data.owner;

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

  cardLiked(data) {
    this._likes = data.likes;
    this._likeIcon.classList.toggle('element__like-icon_active');
    this._likesCounter.textContent = this._likes.length;
  }

  _isCardLiked() {
    if (
      this._likes.some((user) => {
        return this._userId === user._id;
      })
    ) {
      this._likeIcon.classList.add('element__like-icon_active');
    }
  }

  _checkUserDeleteState() {
    if (this._owner !== this._userId) {
      this._deleteIcon.remove();
    }
  }

  _changeLikeState() {
    if (this._likeIcon.classList.contains('element__like-icon_active')) {
      this._handleCardLikeRemove(this._id);
    } else {
      this._handleCardLike(this._id);
    }
  }

  _setEventListeners() {
    this._deleteIcon.addEventListener('click', () => {
      this._handleCardDelete()
    });

    this._likeIcon.addEventListener('click', () => {
      this._changeLikeState();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }
}