export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _isResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers
    })
      .then(res => this._isResOk(res))
  }

  getCards() {
    return fetch(`${this._baseUrl}cards`, {
        headers: this._headers
      })
      .then(res => this._isResOk(res))
  }

  getInitialCards() {
  }
}