export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this.templateSelector = templateSelector;
    this._nameImage = data.name;
    this._linkImage = data.link;
    this._handleCardClick = handleCardClick;
  }

  _createCardElement() {
    return document
      .querySelector(this.templateSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }

  createCard() {
    this._cardElement = this._createCardElement();

    this._cardImage = this._cardElement.querySelector(".card__image");

    // наполняем содержимым
    this._cardImage.src = this._linkImage;
    this._cardImage.alt = this._nameImage;
    this._cardElement.querySelector(".card__title").textContent =
      this._nameImage;

    // устанавливаем обработчики на карточку
    this._setListenersOnCard();

    return this._cardElement;
  }

  _setListenersOnCard() {
    this._deleteButton = this._cardElement.querySelector(".card__del-button");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._image = this._cardElement.querySelector(".card__image");

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
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
