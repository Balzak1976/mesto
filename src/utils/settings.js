export const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export const profileSelectors = {
  userName: ".profile__user-name",
  userAbout: ".profile__user-about",
  userAvatar: ".profile__user-avatar",
};

export const cardsContainerSelector = ".cards__list";

export const apiSettings = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66",
    "Content-Type": "application/json",
  },
};
