export default class Card {
  constructor(
    data,
    templateSelector,
    { hasMyUserId, handleCardClick, handleDelBtnClick, handleLikeBtnClick }
  ) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._hasMyUserId = hasMyUserId;
    this._handleCardClick = handleCardClick;
    this._handleDelBtnClick = handleDelBtnClick;
    this._handleLikeBtnClick = handleLikeBtnClick;
  }

  createCard() {
    const isMyCard = this._hasMyUserId([this._data.owner]);

    this._cardElem = this._createCardElement();

    this._delBtnElem = this._cardElem.querySelector(".card__del-button");
    this._cardImageElem = this._cardElem.querySelector(".card__image");
    this._likeBtnElem = this._cardElem.querySelector(".card__like-button");
    this._likeNumberElem = this._cardElem.querySelector(".card__like-number");

    if (isMyCard) {
      this._delBtnElem.classList.remove("card__del-button_hidden");
    }

    this._cardImageElem.src = this._data.link;
    this._cardImageElem.alt = this._data.name;
    this._cardElem.querySelector(".card__title").textContent = this._data.name;

    this._showLikes(this._data);

    this._setListenersOnCard();

    return this._cardElem;
  }

  _createCardElement() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }

  _setListenersOnCard() {
    this._delBtnElem.addEventListener("click", () => {
      this._handleDelBtnClick(this._data._id, this._deleteCard.bind(this));
    });

    this._cardImageElem.addEventListener("click", () => {
      this._handleCardClick(this._data.link, this._data.name);
    });

    this._likeBtnElem.addEventListener("click", () => {
      this._handleLikeBtnClick(
        this._data,
        this._isMyLike,
        this._showLikes.bind(this)
      );
    });
  }

  _deleteCard() {
    this._cardElem.remove();
  }

  _showLikes(data) {
    this._isMyLike = this._hasMyUserId(data.likes);

    if (this._isMyLike) {
      this._likeBtnElem.classList.add("card__like-button_active");
    } else if (
      this._likeBtnElem.classList.contains("card__like-button_active")
    ) {
      this._likeBtnElem.classList.remove("card__like-button_active");
    }

    if (data.likes.length > 0) {
      this._likeNumberElem.textContent = data.likes.length;
    } else {
      this._likeNumberElem.textContent = null;
    }
  }
}
