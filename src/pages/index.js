import "./index.css";
import Card from "../components/Сard.js";
import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
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

//================================= USER INFO ==================================

const userInfo = new UserInfo(profileSelectors);
console.log(userInfo);

api.getInitialUserInfo(userInfo.setUserInfo.bind(userInfo));

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
    renderer: renderCard,
  },
  cardsContainerSelector
);

api.getInitialCards((dataCards) => {
  console.log(dataCards);

  //подгружаем данные карточек с сервера
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
    popupImage.open,
    isOwner,
    api.deleteCard.bind(api)
  );

  cardsList.addItem(card.createCard());
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

function isOwner(dataCard) {
  return (
    dataCard.owner.name === userInfo.getUserInfo().name &&
    dataCard.owner.about === userInfo.getUserInfo().about
  );
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
