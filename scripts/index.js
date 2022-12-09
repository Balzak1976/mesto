import dataCards from "./data-cards.js";
import Card from "./Сard.js";

import { handleCloseByOverlayClick, closePopup, openPopup } from "./utils.js";

import {
  // profile
  profileUserName,
  profileUserOccupation,
  profileEditButton,
  profileAddButton,
  popupProfileCloseButton,
  formProfileElement,
  formUserName,
  formUserOccupation,
  popupProfileElement,
  // card
  cardsContainer,
  popupCardElement,
  popupCardCloseButton,
  formCardElement,
  formCardName,
  formCardImgLink,
  // zoom picture
  popupZoomPictureElement,
  zoomPictureImg,
  zoomPictureCaption,
  popupZoomPictureCloseButton,
  // validation
  profileFormValidator,
  cardFormValidator,
} from "./const.js";

//========================== RENDER CARDS ======================================

dataCards.forEach((data) => renderCard(data, handleOpenImagePopup));

//=========================== VALIDATION ======================================

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//============================ FUNCTION =======================================

function fillProfilePopupFromProfile() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileUserName.textContent = formUserName.value;
  profileUserOccupation.textContent = formUserOccupation.value;

  closePopup();
}

function handleProfileEditButtonClick() {
  // скрываем старые сообщения ошибок валидации
  profileFormValidator.hideFormValidationErrors();
  fillProfilePopupFromProfile();
  openPopup(popupProfileElement);
}

function handleProfileAddButtonClick() {
  // скрываем старые сообщения ошибок валидации
  cardFormValidator.hideFormValidationErrors();
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

  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  closePopup();
  renderCard(data, handleOpenImagePopup);
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
