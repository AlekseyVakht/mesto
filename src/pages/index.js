import './index.css';
import { Api } from '../scripts/components/Api.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
  initialCards,
  avatarEditButton,
  editButton,
  addButton,
  profileName,
  profileDescription,
  addFormElement,
  profileNameInput,
  profileJobInput,
  newPlace,
  newPlaceLink,
  cardsGrid,
  options
} from '../scripts/utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: 'c1a078e3-d64c-4d67-b98e-d25e1a2a1b3f',
    'Content-Type': 'application/json'
  }
});

// Promise.all([api.getUserInfo(), api.getCards()])
//   .then(([userData, initialCards]) => {
//     userInfo.setUserInfo(userData);
//     cardList.renderItems(initialCards);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const userPopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
  userInfo.setUserInfo(formData);
  },
  popupSelector: '#popup-edit'
});

const avatarPopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
    avatarPopup.loading(true, 'Сохранение...');

  //   api.setUserAvatar(formData)
  //     .then((res) => {
  //       userInfo.setUserInfo(res);
  //     })
  //     .catch(err => console.log(err))
  //     .finally(() => avatarPopup.loading(false))
  },
  popupSelector: '#popup-avatar-change'
});

const placePopup = new PopupWithForm({handleFormSubmit: (formData) => {
  addCard(formData);
  }, 
  popupSelector: '#popup-new-place'
});

const userInfo = new UserInfo({
  userNameSelector: '.profile__name', 
  userJobSelector: '.profile__description'
});

const imagePopup = new PopupWithImage('#popup-image-scaler');

function handleCardClick(name, link) {
  imagePopup.open({
    image: link,
    alt: name,
    text: name
    });
};

function addCard(data) {
  const card = new Card(data, '#elements-template', handleCardClick);
  return cardList.addItem(card.generateCard());
}


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    addCard(item);
    }
  },
  cardsGrid
);

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

editButton.addEventListener('click', ()=> {
  userPopup.open();
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.firstname;
  profileJobInput.value = userData.about;
});

addButton.addEventListener('click', () => {
  placePopup.open();
  formValidators['popup-new-place'].toggleButtonState();
});

avatarEditButton.addEventListener('click', () => {
  avatarPopup.open();
  formValidators['popup-avatar'].toggleButtonState();
});

userPopup.setEventListeners();
avatarPopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();

cardList.renderCards();
enableValidation(options);