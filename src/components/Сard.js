export default class Card {
  constructor(
    data,
    templateSelector,
    isOwner,
    handleCardClick,
    handleDelBtnClick
  ) {
    this._templateSelector = templateSelector;
    this._nameImage = data.name;
    this._linkImage = data.link;
    this._dataOwner = data.owner;
    this._dataId = data._id;
    this._isOwner = isOwner;
    this._handleCardClick = handleCardClick;
    this._handleDelBtnClick = handleDelBtnClick;
  }

  createCard() {
    this._cardElement = this._createCardElement();

    this._delButtonElement =
      this._cardElement.querySelector(".card__del-button");
    this._cardImage = this._cardElement.querySelector(".card__image");

    if (!this._isOwner(this._dataOwner)) {
      this._delButtonElement.classList.add("card__del-button_hidden");
    }

    this._cardImage.src = this._linkImage;
    this._cardImage.alt = this._nameImage;
    this._cardElement.querySelector(".card__title").textContent =
      this._nameImage;

    this._setListenersOnCard();

    return this._cardElement;
  }

  _createCardElement() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }

  _setListenersOnCard() {
    this._deleteButton = this._cardElement.querySelector(".card__del-button");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._image = this._cardElement.querySelector(".card__image");

    this._deleteButton.addEventListener("click", () => {
      // передаём в попап удаления карточки id карточки и колбэк удаления карточки из разметки
      this._handleDelBtnClick(this._dataId, this._deleteCard.bind(this));
    });

    this._likeButton.addEventListener("click", () => {
      this._toggleLikeButton();
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick(this._linkImage, this._nameImage);
    });
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  _toggleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
}
