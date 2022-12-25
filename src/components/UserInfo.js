export default class UserInfo {
  constructor(profileElement, selectors) {
    this._userName = profileElement.querySelector(selectors.userName);
    this._userOccupation = profileElement.querySelector(
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
