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
const formElement = document.querySelector('.form');
const formUserName = formElement.querySelector('.form__item_user_name');
const formUserOccupation = formElement.querySelector(
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
formElement.addEventListener('submit', formSubmitHandler);





//============================ CARDS ==========================================
const cardsContainer = document.querySelector('.cards__list');
// render card
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(card => { renderCard(card, cardsContainer); });

const cardsElement = cardsContainer.querySelectorAll('.card__item');

cardsElement.forEach(card => handlerClicksCard(card));


// popup-card
const popupCardElement = document.querySelector('.popup_type_card');
const popupCardCloseButton = popupCardElement.querySelector(
  '.popup__close_type_card'
);

// card listener
profileAddButton.addEventListener('click', () => openPopup(popupCardElement));
popupCardCloseButton.addEventListener('click', () =>
  closePopup(popupCardElement)
);






























// close popup by click on overlay
/*
popupElement.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popupElement.classList.remove('popup_opened');
  };
});
*/


//============================ FUNCTION =======================================

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

function formSubmitHandler(evt) {
  evt.preventDefault();

  if (formUserName.value !== '') {
    profileUserName.textContent = formUserName.value;
  }

  if (formUserOccupation.value !== '') {
    profileUserOccupation.textContent = formUserOccupation.value;
  }

  closePopup(popupProfileElement);
}

function createCard (data) {
  const cardTemplate = document.querySelector('.card-template').content;

  // клонируем содержимое тега template
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);

  // наполняем содержимым
  cardElement.querySelector('.card__image').src = data.link;
  cardElement.querySelector('.card__image').name = data.name;
  cardElement.querySelector('.card__title').textContent = data.name;

  return cardElement;
}

function renderCard (data, cardsContainer) {
  // Создаем карточку на основе данных
  const cardElement = createCard(data);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
}

function handlerClicksCard (card) {
  const deleteCardButton = card.querySelector('.card__del-button');
  const cardLikeButton = card.querySelector('.card__like-button');

  card.addEventListener('click', function (evt) {
    if (evt.target === deleteCardButton) {
      deleteCard(deleteCardButton);
    }

    if (evt.target === cardLikeButton) {
      toggleLikeButton(cardLikeButton);
    }
  });
}

function deleteCard (element) {
  element.closest('.card__item').remove();
}

function toggleLikeButton (element) {
  element.classList.toggle('card__like-button_active');
}
