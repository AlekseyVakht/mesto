let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-icon');
let likeIcons = document.querySelectorAll('.element__like-icon');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formElement = document.querySelector('.popup');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');

likeIcons.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('element__like-icon_active');
  });
});

editButton.addEventListener('click', function () {
  formElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

});

function popupCloser() {
  formElement.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupCloser();
}

formElement.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', popupCloser);