export default class UserInfo {
  constructor(selectors) {
    this._userAvatar = document.querySelector(selectors.userAvatar);
    this._userName = document.querySelector(selectors.userName);
    this._userAbout = document.querySelector(selectors.userAbout);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent.trim(),
      about: this._userAbout.textContent.trim(),
    };
  }

  setUserInfo({name, about, avatar}) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    if (avatar) this._userAvatar.src = avatar;
  }
}
