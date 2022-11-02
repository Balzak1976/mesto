//============================ PROFILE =======================================

const profileElement = document.querySelector('.profile');
const profileUserName = profileElement.querySelector('.profile__user-name');
const profileUserOccupation = profileElement.querySelector(
  '.profile__user-occupation'
);
const profileEditButton = profileElement.querySelector('.profile__edit-button');
const profileAddButton = profileElement.querySelector('.profile__add-button');

// popup-profile
const popupProfileElement = document.querySelector('.popup_type_profile');
const popupProfileCloseButton = popupProfileElement.querySelector(
  '.popup__close_type_profile'
);

// form-profile
const formProfileElement = document.querySelector('.form_type_profile');
const formUserName = formProfileElement.querySelector('.form__item_user_name');
const formUserOccupation = formProfileElement.querySelector(
  '.form__item_user_occupation'
);

// profile listener
profileEditButton.addEventListener('click', () => {
  fillProfilePopupFromProfile();
  openPopup(popupProfileElement);
});

popupProfileCloseButton.addEventListener('click', () =>
  closePopup(popupProfileElement)
);

// profile form
formProfileElement.addEventListener('submit', profileFormHandler);

initialClosePopupByClickOnOverlay(popupProfileElement);

//============================ CARDS ==========================================

const cardsContainer = document.querySelector('.cards__list');
// render card


initialCards.forEach((card) => {
  renderCard(card);
});

// popup new card
const popupCardElement = document.querySelector('.popup_type_card');
const popupCardCloseButton = popupCardElement.querySelector(
  '.popup__close_type_card'
);

// card listener
profileAddButton.addEventListener('click', () => {
  openPopup(popupCardElement);
  clearFormCardValue();
});
popupCardCloseButton.addEventListener('click', () =>
  closePopup(popupCardElement)
);

// new card form
const formCardElement = document.querySelector('.form_type_card');
const formCardName = formCardElement.querySelector('.form__item_card_name');
const formCardImgLink = formCardElement.querySelector(
  '.form__item_card_img-link'
  );

formCardElement.addEventListener('submit', cardFormHandler);

initialClosePopupByClickOnOverlay(popupCardElement);

// popup zoom picture
const popupZoomPictureElement = document.querySelector(
  '.popup_type_zoom-picture'
);
const popupZoomPictureCloseButton = popupZoomPictureElement.querySelector(
  '.popup__close_type_zoom-picture'
);
const zoomPictureElement = document.querySelector('.zoom-picture');
const zoomPictureImg = zoomPictureElement.querySelector(
  '.zoom-picture__image'
);
const zoomPictureCaption = zoomPictureElement.querySelector(
  '.zoom-picture__caption'
);

popupZoomPictureCloseButton.addEventListener('click', () => {
  closePopup(popupZoomPictureElement);
});

initialClosePopupByClickOnOverlay(popupZoomPictureElement);

//============================ FUNCTION =======================================

function initialClosePopupByClickOnOverlay(popupElement) {
  popupElement.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popupElement);
    }
  });
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function openPopup(element) {
  element.classList.add('popup_opened');
}

function fillProfilePopupFromProfile() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function profileFormHandler(evt) {
  evt.preventDefault();

  if (formUserName.value !== '') {
    profileUserName.textContent = formUserName.value;
  }

  if (formUserOccupation.value !== '') {
    profileUserOccupation.textContent = formUserOccupation.value;
  }

  closePopup(popupProfileElement);
}

function createCard(data) {
  // клонируем содержимое тега template
  const cardElement = document.querySelector('.card-template').content.querySelector('.card__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');

  // наполняем содержимым
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardElement.querySelector('.card__title').textContent = data.name;

  // навешиваем обработчики на карточку
  setEventListenerIntoCard(cardElement);

  return cardElement;
}

function renderCard(data) {
  // Создаем карточку на основе данных
  const cardElement = createCard(data);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
}

function setEventListenerIntoCard(element) {
  const deleteCardButton = element.querySelector('.card__del-button');
  const cardImage = element.querySelector('.card__image');
  const cardTitle = element.querySelector('.card__title');
  const cardLikeButton = element.querySelector('.card__like-button');

  deleteCardButton.addEventListener('click', function () {
    deleteCard(this);
  });

  cardImage.addEventListener('click', function () {
    currentCardHandler(this, cardTitle);
  });

  cardLikeButton.addEventListener('click', function () {
    toggleLikeButton(this);
  });
}

function deleteCard(element) {
  element.closest('.card__item').remove();
}

function currentCardHandler(img, title) {
  openPopup(popupZoomPictureElement);

  zoomPictureImg.src = img.src;
  zoomPictureImg.alt = img.alt;

  zoomPictureCaption.textContent = title.textContent;
}

function toggleLikeButton(element) {
  element.classList.toggle('card__like-button_active');
}

function cardFormHandler(evt) {
  evt.preventDefault();

  const data = {name: formCardName.value, link: formCardImgLink.value};

  closePopup(popupCardElement);
  renderCard(data);
}

function clearFormCardValue () {
  formCardName.value = '';
  formCardImgLink.value = '';
}
