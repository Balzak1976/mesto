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
  getProfileValues();
  openPopup(popupProfileElement);
});

popupProfileCloseButton.addEventListener('click', () =>
  closePopup(popupProfileElement)
);

// profile form
formProfileElement.addEventListener('submit', ProfileFormHandler);

closePopupByClickOnOverlay(popupProfileElement);

//============================ CARDS ==========================================

const cardsContainer = document.querySelector('.cards__list');
// render card
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

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

closePopupByClickOnOverlay(popupCardElement);

// popup zoom picture
const popupZoomPictureElement = document.querySelector(
  '.popup_type_zoom-picture'
);
const popupZoomPictureCloseButton = popupZoomPictureElement.querySelector(
  '.popup__close_type_zoom-picture'
);
const zoomPictureElement = document.querySelector('.zoom-picture');

popupZoomPictureCloseButton.addEventListener('click', () => {
  closePopup(popupZoomPictureElement);
});

closePopupByClickOnOverlay(popupZoomPictureElement);

//============================ FUNCTION =======================================

function closePopupByClickOnOverlay(popupElement) {
  popupElement.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      popupElement.classList.remove('popup_opened');
    }
  });
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function openPopup(element) {
  element.classList.add('popup_opened');
}

function getProfileValues() {
  formUserName.value = profileUserName.textContent.trim();
  formUserOccupation.value = profileUserOccupation.textContent.trim();
}

function ProfileFormHandler(evt) {
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
  const cardTemplate = document.querySelector('.card-template').content;

  // клонируем содержимое тега template
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);

  // наполняем содержимым
  cardElement.querySelector('.card__image').src = data.link;
  cardElement.querySelector('.card__image').alt = data.name;
  cardElement.querySelector('.card__title').textContent = data.name;

  // навешиваем обработчики на карточку
  setEventListener(cardElement);

  return cardElement;
}

function renderCard(data) {
  // Создаем карточку на основе данных
  const cardElement = createCard(data);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
}

function setEventListener(element) {
  const deleteCardButton = element.querySelector('.card__del-button');
  const cardImage = element.querySelector('.card__image');
  const cardLikeButton = element.querySelector('.card__like-button');

  deleteCardButton.addEventListener('click', () => {
    deleteCard(deleteCardButton);
  });

  cardImage.addEventListener('click', () => {
    currentCardHandler(element);
  });

  cardLikeButton.addEventListener('click', () => {
    toggleLikeButton(cardLikeButton);
  });
}

function deleteCard(element) {
  element.closest('.card__item').remove();
}

function toggleLikeButton(element) {
  element.classList.toggle('card__like-button_active');
}

function cardFormHandler(evt) {
  evt.preventDefault();

  const isLink = /^https?(:\/\/).+(.jpg|.png)$/.test(
    formCardImgLink.value.trim()
  );

  if (formCardName.value !== '' && isLink) {
    const data = {};

    data.name = formCardName.value;
    data.link = formCardImgLink.value;

    closePopup(popupCardElement);
    renderCard(data);
  }
}

function clearFormCardValue () {
  formCardName.value = '';
  formCardImgLink.value = '';
}

function currentCardHandler(element) {
  const cardImage = element.querySelector('.card__image');
  const cardTitle = element.querySelector('.card__title');

  const zoomPictureImg = zoomPictureElement.querySelector(
    '.zoom-picture__image'
  );
  const zoomPictureImgCaption = zoomPictureElement.querySelector(
    '.zoom-picture__caption'
  );

  openPopup(popupZoomPictureElement);

  zoomPictureImg.src = cardImage.src;
  zoomPictureImg.alt = cardImage.alt;

  zoomPictureImgCaption.textContent = cardTitle.textContent;
}
