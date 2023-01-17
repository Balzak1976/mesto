export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  getInitialUserInfo(callback) {
    const url = `${this._baseUrl}/users/me`;

    return this._createFetch(url, "GET")
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateAvatar(dataAvatar, callback) {
    const url = `${this._baseUrl}/users/me/avatar`;

    return this._createFetch(url, "PATCH", dataAvatar)
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo(dataUser, callback) {
    const url = `${this._baseUrl}/users/me`;

    return this._createFetch(url, "PATCH", dataUser)
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards(callback) {
    const url = `${this._baseUrl}/cards`;

    return this._createFetch(url, "GET")
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewCard(dataCards, callback) {
    const url = `${this._baseUrl}/cards`;

    return this._createFetch(url, "POST", dataCards)
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(dataCardId, callback) {
    const url = `${this._baseUrl}/cards/${dataCardId}`;

    return this._createFetch(url, "DELETE")
      .then((data) => {
        console.log("deleteCard", data);
        // обновляем данные на странице
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
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
