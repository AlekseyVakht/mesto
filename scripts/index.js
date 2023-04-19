import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Card } from './Card.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import {
  initialCards,
  nameInput,
  jobInput,
  editButton,
  addButton,
  profileName,
  profileDescription,
  profileNameInput,
  profileJobInput,
  newPlace,
  newPlaceLink,
  profilePopup,
  newPlacePopup,
  popupImage,
  popupImageCapture,
  popupImageScaler,
  editFormElement,
  addFormElement,
  closeButton,
  popupElement,
  cardsGrid,
  options
} from '../utils/constants.js';

const userPopup = new PopupWithForm(submitProfileForm, '#popup-edit');
const placePopup = new PopupWithForm(submitNewPlaceForm, '#popup-new-place');
const userInfo = new UserInfo({userNameSelector: profileName, userJobSelector: profileDescription});

function submitProfileForm() {
  userInfo.setUserInfo(profileNameInput.value, profileJobInput.value);
};


function handleCardClick(name, link) {
  const imagePopup = new PopupWithImage({
    image: link,
    alt: name,
    text: name
    },
    '#popup-image-scaler'
  );
  imagePopup.open();
};

editButton.addEventListener('click', ()=> {
  userPopup.open();
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.firstname;
  profileJobInput.value = userData.about;
});

addButton.addEventListener('click', () => {
  placePopup.open();
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


function submitNewPlaceForm() {
  addCard(
    {
      name: newPlace.value, 
      link: newPlaceLink.value
    }
  )
  console.log(cardList);
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

cardList.renderCard();
enableValidation(options);