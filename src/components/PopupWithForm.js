import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.formElement = this._popupElement.querySelector(".form");
    this._inputList = this._popupElement.querySelectorAll(".form__input");
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  _getInputValues() {
    const inputsValue = {};

    this._inputList.forEach((element) => {
      inputsValue[element.name] = element.value;
    });

    return inputsValue;
  }

  close() {
    super.close();
    this.formElement.reset();
  }

  setInputValues(values) {
    this._inputList.forEach((element) => {
      if (values[element.name]) {
        element.value = values[element.name];
      }
    });
  }
}
