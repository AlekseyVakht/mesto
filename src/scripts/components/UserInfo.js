export class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._userName = userNameSelector;
    this._userJob = userJobSelector;
  }

  getUserInfo() {
    return {
      firstname: this._userName.textContent,
      about: this._userJob.textContent
    }
  }

  setUserInfo(firstname, about) {
    this._userName.textContent = firstname;
    this._userJob.textContent = about;
  }
}