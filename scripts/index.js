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

initialCards.forEach(function(item) {
  const userCard = cardsTemplate.querySelector('.element').cloneNode(true);
  userCard.querySelector('.element__image').src=item.link;
  userCard.querySelector('.element__image').setAttribute('alt', item.name[0].toUpperCase() + item.name.slice(1));
  userCard.querySelector('.element__heading').textContent = item.name[0].toUpperCase() + item.name.slice(1);
  cardsGrid.append(userCard);
});

const deleteButton = document.querySelectorAll('.element__delete-icon');
deleteButton.forEach((item) => {
  item.addEventListener('click', function () {
    item.closest('.element').remove();
  });
});


const formElement = document.querySelectorAll('.popup__form');
let nameInput = document.querySelector('.popup__form-item_input_name');
let jobInput = document.querySelector('.popup__form-item_input_job');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

const popup = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('#popup-edit');
const popupNewPlace = document.querySelector('#popup-new-place');
const closeButton = document.querySelectorAll('.popup__close-icon');

function togglePopup(evt) {
  if (evt.target.matches('.profile__add-btn')) {
    openAddPopup();
  } else if (evt.target.matches('.profile__edit-btn')) {
    openEditPopup();
  };
};

addButton.addEventListener('click', togglePopup);
editButton.addEventListener('click', togglePopup);

function openEditPopup() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function openAddPopup() {
  popupNewPlace.classList.add('popup_opened');
};

function closePopup(evt) {
  const index = Array.from(closeButton).indexOf(this);
  const submit = Array.from(formElement).indexOf(this);
  if (evt.target.matches('.popup__close-icon')) {
    popup[index].classList.remove('popup_opened');
  } else if (evt.target.matches('.popup__form')) {
    popup[submit].classList.remove('popup_opened');
  };
};

closeButton.forEach((btn) => {
  btn.addEventListener('click', closePopup)
});

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup();
};
formElement.forEach((btn) => btn.addEventListener('submit', handleFormSubmit));