export class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      firstname: this._userName.textContent,
      about: this._userJob.textContent
    }
  }

  setUserInfo({ firstname, about }) {
    this._userName.textContent = firstname;
    this._userJob.textContent = about;
  }
}