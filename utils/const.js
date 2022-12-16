import FormValidator from "../components/FormValidator.js";
import { validationConfig } from "./settings.js";

//============================ PROFILE =======================================

export const profileElement = document.querySelector(".profile");
export const profileUserName = profileElement.querySelector(
  ".profile__user-name"
);
export const profileUserOccupation = profileElement.querySelector(
  ".profile__user-occupation"
);
export const profileEditButton = profileElement.querySelector(
  ".profile__edit-button"
);
export const profileAddButton = profileElement.querySelector(
  ".profile__add-button"
);

// popup-profile
export const popupProfileElement = document.querySelector(
  ".popup_type_profile"
);

// form-profile
export const formProfileElement = document.querySelector(".form_type_profile");
export const formUserName = formProfileElement.querySelector(
  ".form__input_user_name"
);
export const formUserOccupation = formProfileElement.querySelector(
  ".form__input_user_occupation"
);

//============================ CARDS ==========================================

export const cardsContainer = document.querySelector(".cards__list");
export const cardsContainerSelector = ".cards__list";

// popup new card
export const popupCardElement = document.querySelector(".popup_type_card");

// new card form
export const formCardElement = document.querySelector(".form_type_card");
export const formCardName = formCardElement.querySelector(
  ".form__input_card_name"
);
export const formCardImgLink = formCardElement.querySelector(
  ".form__input_card_img-link"
);

//======================== POPUP ZOOM PICTURE ==================================

export const popupZoomPictureElement = document.querySelector(
  ".popup_type_zoom-picture"
);
export const popupZoomPictureCloseButton =
  popupZoomPictureElement.querySelector(".popup__close_type_zoom-picture");
export const zoomPictureElement = document.querySelector(".zoom-picture");
export const zoomPictureImg = zoomPictureElement.querySelector(
  ".zoom-picture__image"
);
export const zoomPictureCaption = zoomPictureElement.querySelector(
  ".zoom-picture__caption"
);

//================================ VALIDATION ==================================

export const profileFormValidator = new FormValidator(
  validationConfig,
  formProfileElement
);
export const cardFormValidator = new FormValidator(
  validationConfig,
  formCardElement
);

//==============================================================================
