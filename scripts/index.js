const nameInput = document.querySelector('.popup__form-item_input_name');
const jobInput = document.querySelector('.popup__form-item_input_job');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const newPlace = document.querySelector('.popup__form-item_input_place');
const newPlaceLink = document.querySelector('.popup__form-item_input_link')

const profilePopup = document.querySelector('#popup-edit');
const newPlacePopup = document.querySelector('#popup-new-place');

const popupImage = document.querySelector('.popup__image');
const popupImageCapture = document.querySelector('.popup__image-capture');
const popupImageScaler = document.querySelector('#popup-image-scaler');

const editFormElement = document.querySelector('#popup-edit-form');
const addFormElement = document.querySelector('#popup-new-place-form');

const closeButtons = document.querySelectorAll('.popup__close-icon');
const popups = document.querySelectorAll('.popup');

const cardsGrid = document.querySelector('.elements');

function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCapture.textContent = name;
  togglePopup(popupImageScaler);
};

function createCard(data) {
  const card = new Card(data, '#elements-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

initialCards.forEach((item) => {
  const cardElem = createCard(item);
  cardsGrid.prepend(cardElem);
 });

export function togglePopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupByEsc);
};

addButton.addEventListener('click', () => {
  togglePopup(newPlacePopup);
});

editButton.addEventListener('click', ()=> {
  togglePopup(profilePopup);
  editProfileForm();
});

editFormElement.addEventListener('submit', submitProfileForm);
addFormElement.addEventListener('submit', submitNewPlaceForm);

function editProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(profilePopup);
};

function submitNewPlaceForm(evt) {
  evt.preventDefault();
  const cardData = {
    name: newPlace.value,
    link: newPlaceLink.value
  };
  const newCard = createCard(cardData);
  cardsGrid.prepend(newCard);
  closePopup(newPlacePopup);
  addFormElement.reset();
  formValidators['popup-new-place'].toggleButtonState();
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupByEsc);
};

function closePopupByEsc(evt) {
  if (evt.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

closeButtons.forEach((item) => {
  item.addEventListener(('click'), (evt)=> {
    closePopup(evt.target.closest('.popup'));
  });
});

popups.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget){
      closePopup(item);
    };
  });
});

const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__form-item_input_type-error',
  errorClass: 'popup__input-error_active'
};

const formValidators = {}

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(options, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(options);

import {initialCards} from './cards.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';