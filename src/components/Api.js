export default class Api {
  constructor (options) {
    this._options = options;
    this._autorization = this._options.authorization;
    this._url = this._options.baseUrl;
    this._cohort = this._options.cohort;
  }

  setUserInfo () {
    return fetch(`${this._url}${this._cohort}users/me`, {
      headers: {
        authorization: this._autorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  getUserInfo (data) {
    fetch(`${this._url}${this._cohort}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._autorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.desc
      })

    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  updateAvatar (data) {
    return fetch(`${this._url}${this._cohort}users/me/avatar/`, {
      method: 'PATCH',
      headers: {
        authorization: this._autorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${data.link}`
      })

    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  getInitialCards () {
    return fetch(`${this._url}${this._cohort}cards`, {
      headers: {
        authorization: this._autorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  addCard (data) {
    return fetch(`${this._url}${this._cohort}cards`, {
      method: 'POST',
      headers: {
        authorization: this._autorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.subtitle,
        link: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  deleteCard (cardId) {
    return fetch(`${this._url}${this._cohort}cards/${cardId}`, {
      method: 'DELETE',
      headers: { authorization: this._autorization }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  removeLike (cardId) {
    return fetch(`${this._url}${this._cohort}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: { authorization: this._autorization }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  addLike (cardId) {
    return fetch(`${this._url}${this._cohort}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: { authorization: this._autorization }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}
