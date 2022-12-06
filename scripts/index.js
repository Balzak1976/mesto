import dataCards from "./data-cards.js";
import Card from "./Сard.js";
import FormValidator from "./FormValidator.js";

import { handleCloseByOverlayClick, closePopup, openPopup } from "./utils.js";

import {
  // profile
  profileUserName,
  profileUserOccupation,
  profileEditButton,
  profileAddButton,
  popupProfileCloseButton,
  formUserName,
  formUserOccupation,
  popupProfileElement,
  formProfileElement,
  // card
  cardsContainer,
  popupCardElement,
  popupCardCloseButton,
  formCardElement,
  formCardName,
  formCardImgLink,
  buttonSubmitElement,
  // zoom picture
  popupZoomPictureElement,
  zoomPictureImg,
  zoomPictureCaption,
  popupZoomPictureCloseButton,
} from "./const.js";

//========================== RENDER CARDS ======================================

dataCards.forEach((data) => renderCard(data, handleOpenImagePopup));

//=========================== VALIDATION ======================================

realizeValidation(validationConfig);

//============================ FUNCTION =======================================

function realizeValidation({ formSelector, ...rest }) {
  const formList = document.querySelectorAll(formSelector);

  formList.forEach((formElement) => {
    new FormValidator(
      rest,
      formElement,
      setInactiveButtonState,
      setActiveButtonState,
      hideInputError
    ).enableValidation();
  });
}

function fillProfilePopupFromProfile() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileUserName.textContent = formUserName.value;
  profileUserOccupation.textContent = formUserOccupation.value;

  closePopup(popupProfileElement);
}

function handleProfileEditButtonClick() {
  hideFormValidationErrors(formProfileElement, validationConfig);
  fillProfilePopupFromProfile();
  openPopup(popupProfileElement);
}

function handleProfileAddButtonClick() {
  hideFormValidationErrors(formCardElement, validationConfig);
  formCardElement.reset();
  openPopup(popupCardElement);
}

function renderCard(...args) {
  cardsContainer.prepend(new Card(...args).createCard());
}

function handleOpenImagePopup() {
  openPopup(popupZoomPictureElement);

  zoomPictureImg.src = this._linkImage;
  zoomPictureImg.alt = this._nameImage;
  zoomPictureCaption.textContent = this._nameImage;
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const data = { name: formCardName.value, link: formCardImgLink.value };

  setInactiveButtonState(buttonSubmitElement, validationConfig);

  closePopup(popupCardElement);
  renderCard(data, handleOpenImagePopup);
}

function hideFormValidationErrors(
  formElement,
  { inputSelector, ...validationConfig }
) {
  const inputList = formElement.querySelectorAll(inputSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });
}

//========================= PROFILE LISTENER ===================================

profileEditButton.addEventListener("click", handleProfileEditButtonClick);

popupProfileCloseButton.addEventListener("click", closePopup);
popupProfileElement.addEventListener("click", handleCloseByOverlayClick);

formProfileElement.addEventListener("submit", handleProfileFormSubmit);

//=========================== CARDS LISTENER ===================================

profileAddButton.addEventListener("click", handleProfileAddButtonClick);

popupCardCloseButton.addEventListener("click", closePopup);
popupCardElement.addEventListener("click", handleCloseByOverlayClick);

formCardElement.addEventListener("submit", handleCardFormSubmit);

//======================== ZOOM PICTURE LISTENER ===============================

popupZoomPictureCloseButton.addEventListener("click", closePopup);
popupZoomPictureElement.addEventListener("click", handleCloseByOverlayClick);
