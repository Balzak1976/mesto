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
  apiSettings,
} from "../utils/settings.js";

import {
  profileEditButton,
  profileAddButton,
  profileUpdateAvatarButton,
} from "../utils/const.js";

//==================================== API =====================================

const api = new Api(apiSettings);

//============================== POPUP WITH FORM ===============================

const formUpdateAvatar = new PopupWithForm(
  ".popup_type_update-avatar",
  handleAvatarFormSubmit
);
formUpdateAvatar.setEventListeners();

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
  ".popup_type_del-card",
  api.deleteCard.bind(api)
);
popupDelCard.setEventListeners();

//============================== PROMISES ======================================

const userInfo = new UserInfo(profileSelectors);

api.getInitialProfile((dataUser) => {
  userInfo.setUserInfo(dataUser);
});

const cardsList = new Section({ renderer: renderCard }, cardsContainerSelector);

api.getInitialCards((dataCards) => {
  cardsList.renderedItems = dataCards;
  cardsList.renderItems();
});

//=========================== VALIDATION ======================================

const avatarUpdateFormValidator = new FormValidator(
  validationConfig,
  formUpdateAvatar.formElement
);

const profileFormValidator = new FormValidator(
  validationConfig,
  formProfile.formElement
);

const cardFormValidator = new FormValidator(
  validationConfig,
  formCard.formElement
);

avatarUpdateFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//============================ FUNCTION =======================================

function renderCard(dataCard) {
  const card = new Card(dataCard, ".card-template", {
    hasMyUserId: (data) => data.some((obj) => obj._id === userInfo.id),
    handleCardClick: popupImage.open.bind(popupImage),
    handleDelBtnClick: popupDelCard.open.bind(popupDelCard),
    handleLikeBtnClick: api.toggleLike.bind(api),
  });

  cardsList.addItem(card.createCard());
}

function handleAvatarFormSubmit(inputValues) {
  formUpdateAvatar.setButtonSubmitState();
  // обновляем данные профиля на сервере
  api.updateAvatar(inputValues, userInfo.setUserInfo).finally(() => {
    formUpdateAvatar.setButtonSubmitState(false);
    formUpdateAvatar.close();
    avatarUpdateFormValidator.setInactiveButtonState();
  });
}

function handleProfileFormSubmit(inputValues) {
  formProfile.setButtonSubmitState();
  // обновляем данные профиля на сервере
  api.updateUserInfo(inputValues, userInfo.setUserInfo).finally(() => {
    formProfile.setButtonSubmitState(false);
    formProfile.close();
  });
}

function handleCardFormSubmit(inputValues) {
  formCard.setButtonSubmitState();

  api.addNewCard(inputValues, renderCard).finally(() => {
    formCard.setButtonSubmitState(false);
    formCard.close();
    // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
    cardFormValidator.setInactiveButtonState();
  });
}

//========================= PROFILE LISTENER ===================================

profileUpdateAvatarButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  avatarUpdateFormValidator.hideFormValidationErrors();

  formUpdateAvatar.open();
});

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
