export default class UserInfo {
  constructor(selectors) {
    this._userName = document.querySelector(selectors.userName);
    this._userOccupation = document.querySelector(
      selectors.userOccupation
    );
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent.trim(),
      userOccupation: this._userOccupation.textContent.trim(),
    };
  }

  setUserInfo(userName, userOccupation) {
    this._userName.textContent = userName;
    this._userOccupation.textContent = userOccupation;
  }
}
