import "./index.css";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  dataCards,
  validationConfig,
  profileSelectors,
  cardsContainerSelector,
} from "../utils/settings.js";

import {
  profileElement,
  profileEditButton,
  profileAddButton,
} from "../utils/const.js";

//================================= USER INFO ==================================

const userInfo = new UserInfo(profileElement, profileSelectors);

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

function handleProfileFormSubmit(evt, { userName, userOccupation }) {
  evt.preventDefault();

  userInfo.setUserInfo(userName, userOccupation);
}

function handleCardFormSubmit(evt, data) {
  evt.preventDefault();
  // блокируем кнопку при повторном открытии формы, чтобы не создать пустую карточку
  cardFormValidator.setInactiveButtonState();

  const newCard = new Section(
    {
      items: [data],
      renderer: (item) => {
        const card = new Card(item, popupImage.open.bind(popupImage));

        const cardElement = card.createCard();

        newCard.addItem(cardElement);
      },
    },
    cardsContainerSelector
  );

  newCard.renderItems();
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

profileAddButton.addEventListener("click", () => {
  // скрываем старые сообщения ошибок валидации
  cardFormValidator.hideFormValidationErrors.call(cardFormValidator);

  formCard.open.call(formCard);
});
