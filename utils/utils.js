function handleCloseByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", handleCloseByEsc);
}

//==============================================================================

export { handleCloseByOverlayClick, closePopup, openPopup };
