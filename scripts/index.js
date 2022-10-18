let profileElement = document.querySelector('.profile');
let profileUserName = profileElement.querySelector('.profile__user-name');
let profileUserOccupation = profileElement.querySelector('.profile__user-occupation');
let profileEditButton = profileElement.querySelector('.profile__edit-button');
let profileAddButton = profileElement.querySelector('.profile__add-button');

let popupElement = document.querySelector('.popup');
let popupCloseButton = popupElement.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let formUserName = formElement.querySelector('.form__item_user_name');
let formUserOccupation = formElement.querySelector('.form__item_user_occupation');

// open popup
profileEditButton.addEventListener('click', openPopup);

function openPopup() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();

  popupElement.classList.add('popup_opened');
}

// close popup
popupCloseButton.addEventListener('click', closePopup);

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

// close popup by click on overlay
popupElement.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popupElement.classList.remove('popup_opened');
  };
});

// form
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  if (formUserName.value !== '') {
    profileUserName.textContent = formUserName.value;
  }

  if (formUserOccupation.value !== '') {
    profileUserOccupation.textContent = formUserOccupation.value;
  }

  closePopup();
}
