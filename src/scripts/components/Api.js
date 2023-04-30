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

  patchProfile(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => this._isResOk(res))
  }

  postCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => this._isResOk(res))
  };

  setUserAvatar({link}) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._isRestOk(res))
  };

  likeCard(id, isLiked) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers
    })
    .then((res) => this._isResOk(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._isResOk(res))
  }
}