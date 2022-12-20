import { dataCards } from "../utils/settings.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  // profile
  profileElement,
  profileEditButton,
  profileAddButton,
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

//================================= USER INFO ==================================

const userInfo = new UserInfo(profileElement, {
  userName: ".profile__user-name",
  userOccupation: ".profile__user-occupation",
});

//============================== POPUP WITH FORM ===============================

const formProfile = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);
formProfile.setEventListeners();

const formCard = new PopupWithForm(".popup_type_card", handleCardFormSubmit);
formCard.setEventListeners();

//============================= POPUP IMAGE ====================================

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

function renderCard(...args) {
  cardsContainer.prepend(new Card(...args).createCard());
}

function handleProfileFormSubmit(evt, { userName, userOccupation }) {
  evt.preventDefault();

  userInfo.setUserInfo(userName, userOccupation);
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

  // заполняем поля формы из профиля
  formProfile.setInputValues.call(
    formProfile,
    userInfo.getUserInfo.call(userInfo)
  );

  formProfile.open.call(formProfile);
});

//=========================== CARD LISTENER ===================================

profileAddButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  cardFormValidator.hideFormValidationErrors.call(cardFormValidator);

  formCard.open.call(formCard);
});
