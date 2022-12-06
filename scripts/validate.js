const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//============================ FUNCTION =======================================

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

function setInactiveButtonState(buttonElement, { inactiveButtonClass }) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
}

function setActiveButtonState(buttonElement, { inactiveButtonClass }) {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
}
