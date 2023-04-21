import './index.css';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
  initialCards,
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

const userPopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
  userInfo.setUserInfo({ 
    firstname: formData.firstname,
    about: formData.about
  });
  },
popupSelector: '#popup-edit'});
userPopup.setEventListeners();


const placePopup = new PopupWithForm({handleFormSubmit: (formData) => {
  addCard(formData);
  }, 
  popupSelector: '#popup-new-place'});
placePopup.setEventListeners();

const userInfo = new UserInfo({userNameSelector: '.profile__name', userJobSelector: '.profile__description'});
const imagePopup = new PopupWithImage('#popup-image-scaler');

function handleCardClick(name, link) {
  imagePopup.open({
    image: link,
    alt: name,
    text: name
    });
};

editButton.addEventListener('click', ()=> {
  userPopup.open();
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.firstname;
  profileJobInput.value = userData.about;
});

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

addButton.addEventListener('click', () => {
  placePopup.open();
  formValidators['popup-new-place'].toggleButtonState();
});

cardList.renderCards();
enableValidation(options);