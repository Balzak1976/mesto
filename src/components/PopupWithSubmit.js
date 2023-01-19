import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.formElement = this._popupElement.querySelector(".form");
  }

  open(cardId, deleteCard) {
    super.open();
    this._cardId = cardId;
    // колбэк удаления карточки
    this._deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._cardId, this._deleteCard);
    });
  }
}
