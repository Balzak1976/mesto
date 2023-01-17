export default class UserInfo {
  constructor(selectors) {
    this._nameElem = document.querySelector(selectors.userName);
    this._aboutElem = document.querySelector(selectors.userAbout);
    this._avatarElem = document.querySelector(selectors.userAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent,
      about: this._aboutElem.textContent,
    };
  }

  setUserInfo = (data) => {
    this.name = data.name;
    this.about = data.about;
    this.avatar = data.avatar;
    this.id = data._id;

    this._nameElem.textContent = data.name;
    this._aboutElem.textContent = data.about;
    this._avatarElem.src = this.avatar;
  };
}
