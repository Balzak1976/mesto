import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._zoomPictureImg = this._popupElement.querySelector(
      ".zoom-picture__image"
    );
    this._zoomPictureCaption = this._popupElement.querySelector(
      ".zoom-picture__caption"
    );
  }

  open (linkImage, nameImage) {
    super.open();

    this._zoomPictureImg.src = linkImage;
    this._zoomPictureImg.alt = nameImage;
    this._zoomPictureCaption.textContent = nameImage;
  }
}
