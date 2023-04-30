export class UserInfo {
  constructor({userNameSelector, userJobSelector, userAvatarSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      firstname: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._userAvatar
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.firstname;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._userAvatar.alt = data.firstname;
    this._id = data._id;
  }

  getUserId() {
    return this._id;
  }
}