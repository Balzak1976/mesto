import "./index.css";
import Card from "../components/Сard.js";
import Api from "../components/Api.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  dataCards,
  validationConfig,
  profileSelectors,
  cardsContainerSelector,
} from "../utils/settings.js";

import { profileEditButton, profileAddButton } from "../utils/const.js";

//==================================== API =====================================

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: '4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66',
    'Content-Type': 'application/json'
  }
});


//================================= USER INFO ==================================

const userInfo = new UserInfo(profileSelectors);

// api.getInitialUserInfo();

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
  { items: dataCards, renderer: renderCard },
  cardsContainerSelector
);

cardsList.renderItems();

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

function renderCard(data) {
  const card = new Card(data, ".card-template", popupImage.open);

  cardsList.addItem(card.createCard());
}

function handleProfileFormSubmit({ userName, userOccupation }) {
  userInfo.setUserInfo(userName, userOccupation);
}

function handleCardFormSubmit(data) {
  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  renderCard(data);
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
