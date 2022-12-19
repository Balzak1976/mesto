import { dataCards, validationConfig } from "../utils/settings.js";
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
import PopupWithForm from "../components/PopupWithForm.js";

//=============================== POPUP IMAGE ==================================

const popupImage = new PopupWithImage(".popup_type_zoom-picture");
popupImage.setEventListeners();

//============================== POPUP WITH FORM ===============================

const formProfile = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);
formProfile.setEventListeners();

const formCard = new PopupWithForm(".popup_type_card", handleCardFormSubmit);
formCard.setEventListeners();
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
 
function handleProfileFormSubmit(evt, { userName, userOccupation }) {
  evt.preventDefault();

  profileUserName.textContent = userName;
  profileUserOccupation.textContent = userOccupation;
}

function renderCard(...args) {
  cardsContainer.prepend(new Card(...args).createCard());
}

function handleCardFormSubmit(evt, data) {
  evt.preventDefault();
  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  renderCard(data, popupImage.open.bind(popupImage));
}

//========================= PROFILE LISTENER ===================================

profileEditButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  profileFormValidator.hideFormValidationErrors.call(profileFormValidator);

  formProfile.open.call(formProfile);
});

//=========================== CARD LISTENER ===================================

profileAddButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  cardFormValidator.hideFormValidationErrors.call(cardFormValidator);

  formCard.open.call(formCard);
});
