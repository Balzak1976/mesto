"use strict";

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
let formSubmit = formElement.querySelector('.form__submit');

// open popup
profileEditButton.addEventListener('click', function() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();

  popupElement.classList.add('popup_opened');
});

// close popup
popupCloseButton.addEventListener('click', function() {
  popupElement.classList.remove('popup_opened');
});

// close popup by click on overlay
popupElement.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popupElement.classList.remove('popup_opened');
  };
});

// form
formSubmit.addEventListener('click', function(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  if (formUserName.value !== '') {
    profileUserName.textContent = formUserName.value;
  }

  if (formUserOccupation.value !== '') {
    profileUserOccupation.textContent = formUserOccupation.value;
  }

  popupElement.classList.remove('popup_opened');
});
