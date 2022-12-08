import { popupList } from "./const.js";

//==============================================================================

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
  popupList.forEach((popupElement) => {
    if (popupElement) {
      popupElement.classList.remove("popup_opened");
    }
  });

  document.removeEventListener("keydown", handleCloseByEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");

  document.addEventListener("keydown", handleCloseByEsc);
}

//==============================================================================

export { handleCloseByOverlayClick, closePopup, openPopup };
