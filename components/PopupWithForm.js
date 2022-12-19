import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement = this._popupElement.querySelector(".form");

    this._formElement.addEventListener("submit", (evt) => {
      this._handleFormSubmit(evt, this._getInputValues.call(this));

      this.close.call(this);
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  _getInputValues() {
    const inputList = this._popupElement.querySelectorAll(".form__input");
    const inputValues = {};

    inputList.forEach((element) => {
      inputValues[element.name] = element.value;
    });

    return inputValues;
  }
}
