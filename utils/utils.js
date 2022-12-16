function handleCloseByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", handleCloseByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
}

function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}
//==============================================================================

export { handleCloseByOverlayClick, closePopup, openPopup };
