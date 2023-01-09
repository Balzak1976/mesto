export default class UserInfo {
  constructor(selectors) {
    this._avatarElem = document.querySelector(selectors.userAvatar);
    this._nameElem = document.querySelector(selectors.userName);
    this._aboutElem = document.querySelector(selectors.userAbout);
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent.trim(),
      about: this._aboutElem.textContent.trim(),
    };
  }

  setUserInfo ({name, about, avatar}) {
    this._nameElem.textContent = name;
    this._aboutElem.textContent = about;
    if (avatar) this._avatarElem.src = avatar;
  }
}
