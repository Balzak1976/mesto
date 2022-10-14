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

profileEditButton.addEventListener('click', function() {
  popupElement.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function() {
  popupElement.classList.remove('popup_opened');
});

formSubmit.addEventListener('click', function(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileUserName.textContent = formUserName.value;
  profileUserOccupation.textContent = formUserOccupation.value;
});
