export default class FormValidator {
  constructor(params, formElement) {
    this._inputSelector = params.inputSelector;
    this._submitButtonSelector = params.submitButtonSelector;
    this._inactiveButtonClass = params.inactiveButtonClass;
    this._inputErrorClass = params.inputErrorClass;
    this._errorClass = params.errorClass;
    this._formElement = formElement;
  }
  // ============================= PUBLIC METHOD ===============================

  enableValidation() {
    this._setEventListeners();
  }

  hideFormValidationErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  setInactiveButtonState() {
    this._buttonSubmitElement.classList.add(this._inactiveButtonClass);
    this._buttonSubmitElement.disabled = true;
  }

  // ============================= INNER METHOD ================================

  _setEventListeners() {
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];

    this._buttonSubmitElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this._toggleButtonSubmitState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);

        this._toggleButtonSubmitState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMassage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMassage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _toggleButtonSubmitState() {
    if (this._hasInvalidInputs()) {
      this.setInactiveButtonState();
    } else {
      this._setActiveButtonState();
    }
  }

  _hasInvalidInputs() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setActiveButtonState() {
    this._buttonSubmitElement.classList.remove(this._inactiveButtonClass);
    this._buttonSubmitElement.disabled = false;
  }
}
