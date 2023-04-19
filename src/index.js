import './pages/index.css';
import { FormValidator } from './scripts/components/FormValidator.js';
import { Section } from './scripts/components/Section.js';
import { Card } from './scripts/components/Card.js';
import { PopupWithImage } from './scripts/components/PopupWithImage.js';
import { PopupWithForm } from './scripts/components/PopupWithForm.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import {
  initialCards,
  editButton,
  addButton,
  profileName,
  profileDescription,
  profileNameInput,
  profileJobInput,
  newPlace,
  newPlaceLink,
  cardsGrid,
  options
} from './scripts/utils/constants.js';

const userPopup = new PopupWithForm(submitProfileForm, '#popup-edit');
const placePopup = new PopupWithForm(submitNewPlaceForm, '#popup-new-place');
const userInfo = new UserInfo({userNameSelector: profileName, userJobSelector: profileDescription});

function submitProfileForm() {
  userInfo.setUserInfo(profileNameInput.value, profileJobInput.value);
  console.log(userPopup)
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