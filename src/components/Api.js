export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  createQueueFetch() {
    return Promise.all([this.getInitialProfile(), this.getInitialCards()]);
  }

  getInitialProfile() {
    const url = `${this._baseUrl}/users/me`;

    return this._createFetch(url, "GET");
  }

  updateAvatar(dataAvatar) {
    const url = `${this._baseUrl}/users/me/avatar`;

    return this._createFetch(url, "PATCH", dataAvatar);
  }

  updateUserInfo(dataUser) {
    const url = `${this._baseUrl}/users/me`;

    return this._createFetch(url, "PATCH", dataUser);
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;

    return this._createFetch(url, "GET");
  }

  addNewCard(dataCards) {
    const url = `${this._baseUrl}/cards`;

    return this._createFetch(url, "POST", dataCards);
  }

  deleteCard(dataCardId) {
    const url = `${this._baseUrl}/cards/${dataCardId}`;

    return this._createFetch(url, "DELETE")

  }

  toggleLike(dataCard, isMyLike, callback) {
    const url = `${this._baseUrl}/cards/${dataCard._id}/likes`;
    const typeMethod = isMyLike ? "DELETE" : "PUT";

    this._createFetch(url, typeMethod)
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _createFetch(url, typeMethod, dataBody) {
    return fetch(url, {
      method: typeMethod,
      headers: this._headers,
      body: dataBody ? JSON.stringify(dataBody) : dataBody,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
