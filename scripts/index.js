const cardsTemplate = document.querySelector('#elements-template').content;
const cardsGrid = document.querySelector('.elements');

const nameInput = document.querySelector('.popup__form-item_input_name');
const jobInput = document.querySelector('.popup__form-item_input_job');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const newPlace = document.querySelector('.popup__form-item_input_place');
const newPlaceLink = document.querySelector('.popup__form-item_input_link')

const popupEdit = document.querySelector('#popup-edit');
const popupNewPlace = document.querySelector('#popup-new-place');
const popupImageScaler = document.querySelector('#popup-image-scaler');
const popupImage = document.querySelector('.popup__image');
const popupImageCapture = document.querySelector('.popup__image-capture');

initialCards.forEach((item) => {
  cardsGrid.prepend(addCards(item.name, item.link));
});

function addCards(place, link) {
  const userCard = cardsTemplate.querySelector('.element').cloneNode(true);
  const userCardImage = userCard.querySelector('.element__image');
  const userCardHeading = userCard.querySelector('.element__heading');
  userCardImage.src=link;
  userCardImage.setAttribute('alt', place[0].toUpperCase() + place.slice(1));
  userCardHeading.textContent = place[0].toUpperCase() + place.slice(1);
  userCardImage.addEventListener('click', ()=>{
    togglePopup(popupImageScaler);
    popupImage.src=link;
    popupImage.alt=place[0].toUpperCase() + place.slice(1);
    popupImageCapture.textContent = place[0].toUpperCase() + place.slice(1);
  });
  const likeIcon =userCard.querySelector('.element__like-icon');
  toggleLike(likeIcon);
  const deleteButton = userCard.querySelector('.element__delete-icon');
  deleteCard(deleteButton);
  return userCard;
};

function toggleLike(btn) {
  btn.addEventListener('click', (evt)=> {
    evt.target.classList.toggle('element__like-icon_active');
  });
};

function deleteCard(btn) {
  btn.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });
};

function togglePopup(popup) {
  popup.classList.add('popup_opened');
  setPopupEventListeners(popup);
};

function setPopupEventListeners(popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget){
      closePopup(popup);
      popup.removeEventListener('click', setPopupEventListeners);
    };
  });
  popup.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape'){
      closePopup(popup);
      popup.removeEventListener('keydown', setPopupEventListeners);
    }
  });
};

addButton.addEventListener('click', ()=> {
  togglePopup(popupNewPlace);
});

editButton.addEventListener('click', ()=> {
  togglePopup(popupEdit);
  editPopup();
});

const editFormElement = document.querySelector('#popup-edit-form');
const addFormElement = document.querySelector('#popup-new-place-form');

editFormElement.addEventListener('submit', editFormSubmit);
addFormElement.addEventListener('submit', addFormSubmit);

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
  cardsGrid.prepend(addCards(newPlace.value, newPlaceLink.value));
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
    closePopup(evt.target.closest('.popup'));
  });
});