import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(linkImage, nameImage) {
    super.open();
    const zoomPictureImg = this._popupElement.querySelector(
      ".zoom-picture__image"
    );
    const zoomPictureCaption = this._popupElement.querySelector(".zoom-picture__caption");

    zoomPictureImg.src = linkImage;
    zoomPictureImg.alt = nameImage;
    zoomPictureCaption.textContent = nameImage;
  }
}
