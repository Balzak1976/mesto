export default class FormValidator {
  constructor(
    validationConfig,
    formElement,
    setInactiveButtonState,
    setActiveButtonState,
    hideInputError
  ) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._setInactiveButtonState = setInactiveButtonState;
    this._setActiveButtonState = setActiveButtonState;
    this._hideInputError = hideInputError;
  }

  enableValidation() {
    this._setEventListeners(this._formElement, this._validationConfig);
  }

  _setEventListeners(formElement, { inputSelector, submitButtonSelector }) {
    this._inputList = [...formElement.querySelectorAll(inputSelector)];
    this._buttonSubmitElement = formElement.querySelector(submitButtonSelector);

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this._toggleButtonSubmitState(this._inputList);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);

        this._toggleButtonSubmitState(this._inputList);
      });
    });
  }

  _toggleButtonSubmitState(inputList) {
    if (this._hasInvalidInputs(inputList)) {
      this._setInactiveButtonState(
        this._buttonSubmitElement,
        this._validationConfig
      );
    } else {
      this._setActiveButtonState(
        this._buttonSubmitElement,
        this._validationConfig
      );
    }
  }

  _hasInvalidInputs(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this._validationConfig
      );
    } else {
      this._hideInputError(formElement, inputElement, this._validationConfig);
    }
  }

  _showInputError(
    formElement,
    inputElement,
    errorMassage,
    { inputErrorClass, errorClass }
  ) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    this._errorElement.classList.add(errorClass);

    this._errorElement.textContent = errorMassage;
  }
}
