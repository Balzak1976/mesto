export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  getInitialUserInfo(callback) {
    fetch(`${this._baseUrl}/users/me`, {
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
        console.log("getInitialCards:", data);
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

  deleteCard(dataCard, callback) {
    fetch(`${this._baseUrl}/cards/${dataCard}`, {
      method: "DELETE",
      headers: this._headers,
      body: '',
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

  /* _createFetch(urlTail) {
    const { baseUrl, ...headers } = this._params;

    fetch(baseUrl + urlTail, headers)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        console.dir(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } */
}
