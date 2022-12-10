import FormValidator from "./FormValidator.js";

//============================ PROFILE =======================================

const profileElement = document.querySelector(".profile");
const profileUserName = profileElement.querySelector(".profile__user-name");
const profileUserOccupation = profileElement.querySelector(
  ".profile__user-occupation"
);
const profileEditButton = profileElement.querySelector(".profile__edit-button");
const profileAddButton = profileElement.querySelector(".profile__add-button");

// popup-profile
const popupProfileElement = document.querySelector(".popup_type_profile");
const popupProfileCloseButton = popupProfileElement.querySelector(
  ".popup__close_type_profile"
);

// form-profile
const formProfileElement = document.querySelector(".form_type_profile");
const formUserName = formProfileElement.querySelector(".form__input_user_name");
const formUserOccupation = formProfileElement.querySelector(
  ".form__input_user_occupation"
);

//============================ CARDS ==========================================

const cardsContainer = document.querySelector(".cards__list");

// popup new card
const popupCardElement = document.querySelector(".popup_type_card");
const popupCardCloseButton = popupCardElement.querySelector(
  ".popup__close_type_card"
);

// new card form
const formCardElement = document.querySelector(".form_type_card");
const formCardName = formCardElement.querySelector(".form__input_card_name");
const formCardImgLink = formCardElement.querySelector(
  ".form__input_card_img-link"
);

//======================== POPUP ZOOM PICTURE ==================================

const popupZoomPictureElement = document.querySelector(
  ".popup_type_zoom-picture"
);
const popupZoomPictureCloseButton = popupZoomPictureElement.querySelector(
  ".popup__close_type_zoom-picture"
);
const zoomPictureElement = document.querySelector(".zoom-picture");
const zoomPictureImg = zoomPictureElement.querySelector(".zoom-picture__image");
const zoomPictureCaption = zoomPictureElement.querySelector(
  ".zoom-picture__caption"
);

//================================ VALIDATION ==================================

const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const profileFormValidator = new FormValidator(
  validationConfig,
  formProfileElement
);
const cardFormValidator = new FormValidator(validationConfig, formCardElement);

//==============================================================================

export {
  // profile
  profileUserName,
  profileUserOccupation,
  profileEditButton,
  profileAddButton,
  popupProfileCloseButton,
  formProfileElement,
  formUserName,
  formUserOccupation,
  popupProfileElement,
  // card
  cardsContainer,
  popupCardElement,
  popupCardCloseButton,
  formCardElement,
  formCardName,
  formCardImgLink,
  // zoom picture
  popupZoomPictureElement,
  popupZoomPictureCloseButton,
  zoomPictureImg,
  zoomPictureCaption,
  // validation
  profileFormValidator,
  cardFormValidator,
};
