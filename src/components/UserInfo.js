export default class UserInfo {
  constructor(selectors) {
    this._nameElem = document.querySelector(selectors.userName);
    this._aboutElem = document.querySelector(selectors.userAbout);
    this._avatarElem = document.querySelector(selectors.userAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent.trim(),
      about: this._aboutElem.textContent.trim(),
    };
  }

  setUserInfo = (data) => {
    this.name = data.name.trim();
    this.about = data.about.trim();
    this.avatar = data.avatar;

    this._nameElem.textContent = data.name.trim();
    this._aboutElem.textContent = data.about.trim();
    this._avatarElem.src = this.avatar;
  };
}
