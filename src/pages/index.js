import './index.css';
import { Api } from '../scripts/components/Api.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithConfirm } from '../scripts/components/PopupWithConfirm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
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

let userId;

Promise.all([api.getUserInfoApi(), api.getCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderCards(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

const userInfo = new UserInfo({
  userNameSelector: '.profile__name', 
  userJobSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'
});

const deleteCardPopup = new PopupWithConfirm('#popup-with-confirm');

const userPopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
    userPopup.loading(true)
    api.patchProfile(formData)
      .then((formData) => {
        userInfo.setUserInfo(formData);
        userPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        userPopup.loading(false)
      });
    },
  popupSelector: '#popup-edit'
});

const avatarPopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
    avatarPopup.loading(true);
    api.setAvatar(formData)
      .then((formData) => {
        userInfo.setUserAvatar(formData);
      })
      .catch(err => console.log(err))
      .finally(() => {
        avatarPopup.loading(false)
      });
    },
  popupSelector: '#popup-avatar-change'
});

const placePopup = new PopupWithForm({
  handleFormSubmit: (formData) => {
    placePopup.loading(true)
    api.postCard(formData)
      .then((formData) => {
        addCard(formData);
      })
      .catch(err => console.log(err))
      .finally(() => {
        placePopup.loading(false)
      });
    }, 
  popupSelector: '#popup-new-place'
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
  const card = new Card({
    data: data,
    userId,
    handleCardClick,
    handleCardDelete: (cardID) => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmit(() => {
        deleteCardPopup.loading(true);
        api.deleteCardApi(cardID)
          .then(() => {
            deleteCardPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            deleteCardPopup.loading(false);
          });
       });
      },
      handleCardLike: (cardID) => {
        api.addCardLike(cardID)
          .then((data) => {
            card.showLikes(data);
          })
          .catch((err) => {
            console.log(err);
          });
        },
      handleCardLikeRemove: (cardID) => {
        api.removeCardLike(cardID)
          .then((data) => {
            card.showLikes(data);
          })
          .catch((err) => {
            console.log(err);
          });
        }
    }, '#elements-template');
  return cardList.addItem(card.generateCard());
}


const cardList = new Section({
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
  profileNameInput.value = userData.name;
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

deleteCardPopup.setEventListeners();
userPopup.setEventListeners();
avatarPopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();

enableValidation(options);