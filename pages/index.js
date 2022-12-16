import { dataCards } from "../utils/settings.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";

import {
  handleCloseByOverlayClick,
  closePopup,
  openPopup,
} from "../utils/utils.js";

import {
  // profile
  profileUserName,
  profileUserOccupation,
  profileEditButton,
  profileAddButton,
  formProfileElement,
  formUserName,
  formUserOccupation,
  popupProfileElement,
  // card
  cardsContainer,
  cardsContainerSelector,
  popupCardElement,
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
} from "../utils/const.js";

//========================== RENDER CARDS ======================================

const cardsList = new Section(
  {
    items: dataCards,
    renderer: (item) => {
      const card = new Card(item, handleOpenImagePopup);

      const cardElement = card.createCard();

      cardsList.addItem(cardElement);
    },
  },
  cardsContainerSelector
);

cardsList.renderItems();

//=========================== VALIDATION ======================================

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//=============================== POPUP CLASS ==================================

const popupProfile = new Popup(".popup_type_profile");
popupProfile.setEventListeners();

const popupCard = new Popup(".popup_type_card");
popupCard.setEventListeners();

//============================ FUNCTION =======================================

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

  closePopup(popupCardElement);
  renderCard(data, handleOpenImagePopup);
}

//========================= PROFILE LISTENER ===================================

profileEditButton.addEventListener(
  "click",
  popupProfile.open.bind(popupProfile)
);

formProfileElement.addEventListener("submit", handleProfileFormSubmit);

//=========================== CARDS LISTENER ===================================

profileAddButton.addEventListener("click", popupCard.open.bind(popupCard));

formCardElement.addEventListener("submit", handleCardFormSubmit);

//======================== ZOOM PICTURE LISTENER ===============================

popupZoomPictureCloseButton.addEventListener("click", (evt) =>
  closePopup(popupZoomPictureElement)
);
popupZoomPictureElement.addEventListener("click", handleCloseByOverlayClick);
