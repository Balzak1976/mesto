export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  getInitialUserInfo(callback) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        // console.log("InitialUserInfo:", data);
        // обновляем данные на странице
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateAvatar(dataAvatar, callback) {
    const url = `${this._baseUrl}/users/me/avatar`;

    this._createFetch(url, "PATCH", dataAvatar)
      .then((data) => {
        console.log("updateAvatar:", data);
        // обновляем данные на странице
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo(dataUser, callback) {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(dataUser),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        console.log("updateUserInfo:", data);
        // обновляем данные на странице
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards(callback) {
    fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        // console.log("getInitialCards:", data);
        // обновляем данные на странице
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewCard(dataCards, callback) {
    fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(dataCards),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        console.log("addNewCard", data);
        // обновляем данные на странице
        callback(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(dataCardId, callback) {
    const url = `${this._baseUrl}/cards/${dataCardId}`;
    fetch(url, {
      method: "DELETE",
      headers: this._headers,
      body: "",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
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
    // const isMyLike = this._hasMyLike(dataCard.likes);

    const typeMethod = isMyLike ? "DELETE" : "PUT";
    // console.log('typeMethod: ', typeMethod);

    this._createFetch(url, typeMethod, "")
      .then((data) => {
        // console.log("toggleLike", data);
        // обновляем данные на странице
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
