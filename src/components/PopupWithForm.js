import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.formElement = this._popupElement.querySelector(".form");
    this._inputList = this._popupElement.querySelectorAll(".form__input");
    this._buttonSubmitElement = this._popupElement
      .querySelector(".form__submit");
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  setButtonSubmitState(isDataSaving = true) {
    if (isDataSaving) {
      this._buttonSubmitElement.textContent = "Сохранение...";
      this._buttonSubmitElement.disabled = true;
    } else {
      this._buttonSubmitElement.textContent = "Сохранить";
      this._buttonSubmitElement.disabled = false;
    }
  }

  close() {
    super.close();
    this.formElement.reset();
  }

  _getInputValues() {
    const inputValues = {};

    this._inputList.forEach((element) => {
      inputValues[element.name] = element.value.trim();
    });

    return inputValues;
  }

  setInputValues(values) {
    this._inputList.forEach((element) => {
      if (values[element.name]) {
        element.value = values[element.name];
      }
    });
  }
}
