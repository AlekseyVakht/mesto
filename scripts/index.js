let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-icon');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let popup = document.querySelector('.popup')
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-item_input_name');
let jobInput = formElement.querySelector('.popup__form-item_input_job');

function popupOpener() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function popupCloser() {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupCloser();
}

editButton.addEventListener('click', popupOpener);
formElement.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', popupCloser);