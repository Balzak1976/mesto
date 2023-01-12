import "./index.css";
import Card from "../components/Сard.js";
import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  validationConfig,
  profileSelectors,
  cardsContainerSelector,
} from "../utils/settings.js";

import { profileEditButton, profileAddButton } from "../utils/const.js";

//==================================== API =====================================

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66",
    "Content-Type": "application/json",
  },
});

//============================== POPUP WITH FORM ===============================

const formProfile = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);
formProfile.setEventListeners();

const formCard = new PopupWithForm(".popup_type_card", handleCardFormSubmit);
formCard.setEventListeners();

const popupImage = new PopupWithImage(".popup_type_zoom-picture");
popupImage.setEventListeners();

const popupDelCard = new PopupWithSubmit(
  ".popup_type_delete",
  api.deleteCard.bind(api)
);
popupDelCard.setEventListeners();

//============================== PROMISES ======================================

const userInfo = new UserInfo(profileSelectors);

api.getInitialUserInfo((dataUser) => {
  userInfo.setUserInfo(dataUser);
});

const cardsList = new Section({ renderer: renderCard }, cardsContainerSelector);

api.getInitialCards((dataCards) => {
  cardsList.renderedItems = dataCards;
  cardsList.renderItems();
});

//=========================== VALIDATION ======================================

const profileFormValidator = new FormValidator(
  validationConfig,
  formProfile.formElement
);

const cardFormValidator = new FormValidator(
  validationConfig,
  formCard.formElement
);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//============================ FUNCTION =======================================

function renderCard(dataCard) {
  const card = new Card(
    dataCard,
    ".card-template",
    isOwner,
    popupImage.open.bind(popupImage),
    popupDelCard.open.bind(popupDelCard)
  );

  cardsList.addItem(card.createCard());
}

function isOwner(dataOwner) {
  return dataOwner.name === userInfo.name && dataOwner.about === userInfo.about;
}

function handleProfileFormSubmit(inputValues) {
  // обновляем данные профиля на сервере
  api.updateUserInfo(inputValues, userInfo.setUserInfo);
}

function handleCardFormSubmit(dataCards) {
  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  api.addNewCard(dataCards, renderCard);
}

//========================= PROFILE LISTENER ===================================

profileEditButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  profileFormValidator.hideFormValidationErrors();

  // заполняем поля формы из профиля
  formProfile.setInputValues(userInfo.getUserInfo());

  formProfile.open();
});

profileAddButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  cardFormValidator.hideFormValidationErrors();

  formCard.open();
});
