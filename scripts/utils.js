
function handleCloseByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleCloseByEsc(evt, popupElement) {
  if (evt.key === "Escape") {
    closePopup(popupElement);
  }
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", (evt) =>
    handleCloseByEsc(evt, popupElement)
  );
}

//==============================================================================

export { handleCloseByOverlayClick, closePopup, openPopup };
