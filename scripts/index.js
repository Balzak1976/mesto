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

// render card
initialCards.forEach((card) => {
  renderCard(card);
});

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

//=========================== VALIDATION ======================================

enableValidation(validationConfig);

//============================ FUNCTION =======================================

function initClosePopupByClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

function closePopup() {
  const popupOpened = document.querySelector(".popup_opened");

  if (popupOpened) {
    popupOpened.classList.remove("popup_opened");
  }

  document.removeEventListener("keydown", handleCloseByEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", handleCloseByEsc);
}

function fillProfilePopupFromProfile() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileUserName.textContent = formUserName.value;
  profileUserOccupation.textContent = formUserOccupation.value;

  closePopup(popupProfileElement);
}

function handelProfileEditButton() {
  hideFormValidationErrors(formProfileElement, validationConfig);
  fillProfilePopupFromProfile();
  openPopup(popupProfileElement);
}

function handleProfileAddButton() {
  hideFormValidationErrors(formCardElement, validationConfig);
  formCardElement.reset();
  openPopup(popupCardElement);
}

function setListersOnCard(cardElement) {
  const buttonDelete = cardElement.querySelector('.card__del-button');
  const buttonLike = cardElement.querySelector('.card__like-button');
  const image = cardElement.querySelector('.card__image');

  buttonDelete.addEventListener("click", () => deleteCard(buttonDelete));
  buttonLike.addEventListener("click", () => toggleLikeButton(buttonLike));
  image.addEventListener("click", () => handleOpenImagePopup(image));
}

function createCard(data) {
  // клонируем содержимое тега template
  const cardElement = document
    .querySelector(".card-template")
    .content.querySelector(".card__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  // наполняем содержимым
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardElement.querySelector(".card__title").textContent = data.name;

  // устанавливаем обработчики на карточку
  setListersOnCard(cardElement);

  return cardElement;
}

function renderCard(data) {
  // Создаем карточку на основе данных
  const cardElement = createCard(data);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
}

function deleteCard(deleteCardButton) {
  deleteCardButton.closest(".card__item").remove();
}

function handleOpenImagePopup(img) {
  const cardElement = img.closest(".card");
  openPopup(popupZoomPictureElement);

  zoomPictureImg.src = img.src;
  zoomPictureImg.alt = img.alt;

  zoomPictureCaption.textContent =
    cardElement.querySelector(".card__title").textContent;
}

function toggleLikeButton(cardLikeButton) {
  cardLikeButton.classList.toggle("card__like-button_active");
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const data = { name: formCardName.value, link: formCardImgLink.value };

  closePopup(popupCardElement);
  renderCard(data);
}

function hideFormValidationErrors(
  formElement,
  { inputSelector, ...validationConfig }
) {
  const inputList = formElement.querySelectorAll(inputSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });
}

//========================= PROFILE LISTENER ===================================

profileEditButton.addEventListener("click", handelProfileEditButton);

popupProfileCloseButton.addEventListener("click", closePopup);
popupProfileElement.addEventListener("click", initClosePopupByClickOnOverlay);

// profile form
formProfileElement.addEventListener("submit", handleProfileFormSubmit);

//=========================== CARDS LISTENER ===================================

formCardElement.addEventListener("submit", handleCardFormSubmit);

profileAddButton.addEventListener("click", handleProfileAddButton);

popupCardCloseButton.addEventListener("click", closePopup);
popupCardElement.addEventListener("click", initClosePopupByClickOnOverlay);

//======================== ZOOM PICTURE LISTENER ===============================

popupZoomPictureCloseButton.addEventListener("click", closePopup);
popupZoomPictureElement.addEventListener(
  "click",
  initClosePopupByClickOnOverlay
);
