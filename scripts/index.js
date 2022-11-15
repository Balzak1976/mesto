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

// profile listener
profileEditButton.addEventListener("click", () => {
  fillProfilePopupFromProfile();
  openPopup(popupProfileElement);
});

popupProfileCloseButton.addEventListener("click", () => {
  closePopup(popupProfileElement);
  formProfileElement.reset();
});

// profile form
formProfileElement.addEventListener("submit", profileFormHandler);

initClosePopupByClickOnOverlay(popupProfileElement);
initClosePopupByClickOnEsc(popupProfileElement);

//============================ CARDS ==========================================

const cardsContainer = document.querySelector(".cards__list");

// render card
initialCards.forEach((card) => {
  renderCard(card);
});

cardsContainer.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("card__del-button")) {
    deleteCard(evt.target);
    return;
  }

  if (evt.target.classList.contains("card__image")) {
    currentCardOpenZoomPictureHandler(evt.target);
    return;
  }

  if (evt.target.classList.contains("card__like-button")) {
    toggleLikeButton(evt.target);
    return;
  }
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

formCardElement.addEventListener("submit", cardFormHandler);

// card listener
profileAddButton.addEventListener("click", () => {
  openPopup(popupCardElement);
  formCardElement.reset();
});

popupCardCloseButton.addEventListener("click", () =>
  closePopup(popupCardElement)
);

initClosePopupByClickOnOverlay(popupCardElement);
initClosePopupByClickOnEsc(popupCardElement);

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

const newLocal = "click";
popupZoomPictureCloseButton.addEventListener(newLocal, () => {
  closePopup(popupZoomPictureElement);
});

initClosePopupByClickOnOverlay(popupZoomPictureElement);
initClosePopupByClickOnEsc(popupZoomPictureElement);

//============================ FUNCTION =======================================

function initClosePopupByClickOnOverlay(popupElement) {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });
}

function initClosePopupByClickOnEsc(popupElement) {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup(popupElement);
    }
  });
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function fillProfilePopupFromProfile() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function profileFormHandler(evt) {
  evt.preventDefault();

  profileUserName.textContent = formUserName.value;
  profileUserOccupation.textContent = formUserOccupation.value;

  closePopup(popupProfileElement);
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

function currentCardOpenZoomPictureHandler(img) {
  openPopup(popupZoomPictureElement);

  zoomPictureImg.src = img.src;
  zoomPictureImg.alt = img.alt;

  zoomPictureCaption.textContent =
    img.nextElementSibling.querySelector(".card__title").textContent;
}

function toggleLikeButton(cardLikeButton) {
  cardLikeButton.classList.toggle("card__like-button_active");
}

function cardFormHandler(evt) {
  evt.preventDefault();

  const data = { name: formCardName.value, link: formCardImgLink.value };

  closePopup(popupCardElement);
  renderCard(data);
}
