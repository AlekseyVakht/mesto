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

const editFormElement = document.querySelector('#popup-edit-form');
const addFormElement = document.querySelector('#popup-new-place-form');

const closeButtons = document.querySelectorAll('.popup__close-icon');
const popups = document.querySelectorAll('.popup');

initialCards.forEach((item) => {
  const card = new Card(item, '#elements-template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').prepend(cardElement);
 });

export function togglePopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupByEsc);
};

addButton.addEventListener('click', () => {
  togglePopup(popupNewPlace);
});

editButton.addEventListener('click', ()=> {
  togglePopup(popupEdit);
  editPopup();
});

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
  const cardData = {
    name: newPlace.value,
    link: newPlaceLink.value,
  };
  const card = new Card(cardData, '#elements-template');
  document.querySelector('.elements').prepend(card.generateCard());
  closePopup(popupNewPlace);
  addFormElement.reset();
  const submitBtn = addFormElement.querySelector('.popup__submit-btn');
  disableSubmitBtn(submitBtn);
};

function disableSubmitBtn (btn) {
  btn.disabled = true;
  btn.classList.add('popup__submit-btn_inactive');
}

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

function enableValidation(options) {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    const validate = new FormValidator(options, formElement);
    validate.enableValidation(options);
  });
}

enableValidation(options);

import {initialCards} from './cards.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';