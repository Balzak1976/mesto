export default class Api {
  constructor(params) {
    this._baseUrl = params.baseUrl;
    this._headers = params.headers;
    this._params = params;
  }

  getInitialUserInfo(func) {
    fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        func(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then((res) => res.json())
      .then((result) => {
        console.dir(result);
      });
  }

  _createFetch(urlTail) {
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
  }
}

/* fetch("https://mesto.nomoreparties.co/v1/cohort-57/users/me", {
  headers: {
    authorization: "4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66",
    'Content-Type': 'application/json'
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.dir(result);
  }); */

/* fetch("https://mesto.nomoreparties.co/v1/cohort-57/cards", {
  headers: {
    authorization: "4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.dir(result);
  }); */
