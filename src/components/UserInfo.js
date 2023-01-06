export default class UserInfo {
  constructor(selectors) {
    this._userName = document.querySelector(selectors.userName);
    this._userOccupation = document.querySelector(selectors.userOccupation);
    this._userAvatar = document.querySelector(selectors.userAvatar);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent.trim(),
      userOccupation: this._userOccupation.textContent.trim(),
    };
  }

  setUserInfo(userName, userOccupation, userAvatar) {
    this._userName.textContent = userName;
    this._userOccupation.textContent = userOccupation;
    if (userAvatar) this._userAvatar.src = userAvatar;
  }
}
