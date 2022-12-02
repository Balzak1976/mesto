function handleCloseByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

function closePopup() {
  const popupOpened = document.querySelector(".popup_opened");

  if (popupOpened) {
    popupOpened.classList.remove("popup_opened");
  }

  document.removeEventListener("keydown", handleCloseByEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", handleCloseByEsc);
}



export {
  handleCloseByOverlayClick,
  closePopup,
  openPopup,
}
