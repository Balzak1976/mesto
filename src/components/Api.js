export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  getInitialUserInfo(callback) {
    fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(callback)
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards(callback) {
    fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(callback)
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
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
