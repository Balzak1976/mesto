const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//============================ FUNCTION =======================================

function showInputError(
  formElement,
  inputElement,
  errorMassage,
  { inputErrorClass, errorClass }
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);

  errorElement.textContent = errorMassage;
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);

  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, rest) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      rest
    );
  } else {
    hideInputError(formElement, inputElement, rest);
  }
}

function hasInvalidInputs(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonSubmitState(
  inputList,
  buttonSubmitElement,
  { inactiveButtonClass }
) {
  if (hasInvalidInputs(inputList)) {
    buttonSubmitElement.classList.add(inactiveButtonClass);
    buttonSubmitElement.setAttribute("disabled", "disabled");
  } else {
    buttonSubmitElement.classList.remove(inactiveButtonClass);
    buttonSubmitElement.removeAttribute("disabled");
  }
}

function setEventListeners(
  formElement,
  { inputSelector, submitButtonSelector, ...rest }
) {
  const inputList = [...formElement.querySelectorAll(inputSelector)];
  const buttonSubmitElement = formElement.querySelector(submitButtonSelector);

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonSubmitState(inputList, buttonSubmitElement, rest);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, rest);

      toggleButtonSubmitState(inputList, buttonSubmitElement, rest);
    });
  });
}

function enableValidation({ formSelector, ...rest }) {
  const formList = document.querySelectorAll(formSelector);

  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
}
