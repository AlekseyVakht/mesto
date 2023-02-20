const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsTemplate = document.querySelector('#elements-template').content;
const cardsGrid = document.querySelector('.elements');

let nameInput = document.querySelector('.popup__form-item_input_name');
let jobInput = document.querySelector('.popup__form-item_input_job');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
const newPlace = document.querySelector('.popup__form-item_input_place');
const newPlaceLink = document.querySelector('.popup__form-item_input_link')

const popupEdit = document.querySelector('#popup-edit');
const popupNewPlace = document.querySelector('#popup-new-place');
const popupImageScaler = document.querySelector('#popup-image-scaler');

initialCards.forEach((item) => {
  addCards(item.name, item.link);
});

function addCards(place, link) {
  const userCard = cardsTemplate.querySelector('.element').cloneNode(true);
  userCard.querySelector('.element__image').src=link;
  userCard.querySelector('.element__image').setAttribute('alt', place[0].toUpperCase() + place.slice(1));
  userCard.querySelector('.element__heading').textContent = place[0].toUpperCase() + place.slice(1);
  cardsGrid.prepend(userCard);
  const elementImages = document.querySelector('#element-pic');
  elementImages.addEventListener('click', ()=>{
    togglePopup(popupImageScaler);
    let popupImage = document.querySelector('.popup__image');
    let popupImageCapture = document.querySelector('.popup__image-capture');
    popupImage.src=link;
    popupImage.alt=place[0].toUpperCase() + place.slice(1);
    popupImageCapture.textContent = place[0].toUpperCase() + place.slice(1);
  });

  toggleLike();
  deleteCard();
};

function toggleLike() {
  const likeIcon = document.querySelector('.element__like-icon');
  likeIcon.addEventListener('click', (evt)=> {
    evt.target.classList.toggle('element__like-icon_active');
  });
};

function deleteCard() {
  const deleteButton = document.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });
};

function togglePopup(popup) {
  popup.classList.add('popup_opened');
};

addButton.addEventListener('click', ()=> {
  togglePopup(popupNewPlace);
});
editButton.addEventListener('click', ()=> {
  togglePopup(popupEdit);
  editPopup();
});

const formElement = document.querySelectorAll('.popup__form');
formElement[0].addEventListener('submit', editFormSubmit);
formElement[1].addEventListener('submit', addFormSubmit);

function editPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
};

function addFormSubmit(evt) {
  evt.preventDefault();
  addCards(newPlace.value, newPlaceLink.value);
  newPlaceLink.value = '';
  newPlace.value = '';
  closePopup(popupNewPlace);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

const closeButton = document.querySelectorAll('.popup__close-icon');
closeButton.forEach((item) => {
  item.addEventListener(('click'), (evt)=> {
    evt.target.closest('.popup').classList.remove('popup_opened');
  });
});