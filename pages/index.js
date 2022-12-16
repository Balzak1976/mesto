import { dataCards } from "../utils/settings.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";

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

//=============================== POPUP CLASS ==================================

const popupProfile = new Popup(".popup_type_profile");
popupProfile.setEventListeners();

const popupCard = new Popup(".popup_type_card");
popupCard.setEventListeners();

const popupImage = new PopupWithImage(".popup_type_zoom-picture");
popupImage.setEventListeners();

//========================== RENDER CARDS ======================================

const cardsList = new Section(
  {
    items: dataCards,
    renderer: (item) => {
      const card = new Card(item, popupImage.open.bind(popupImage));

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

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const data = { name: formCardName.value, link: formCardImgLink.value };

  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  closePopup(popupCardElement);
  renderCard(data, popupImage.open.bind(popupImage));
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
