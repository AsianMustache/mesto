class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _sendRequest(url, options) {
        return fetch(url, options)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
    
            throw new Error("Error");
          })
          .catch((error) => {
            console.log(error);
          });
    }

    getAllCards() {
        return this._sendRequest(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        });
    }

    getApiUserInfo() {
        return this._sendRequest(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        });
    }

    editApiProfile(name, about) {
        return this._sendRequest(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        });
    }

    addNewCardApi(name, link) {
        return this._sendRequest(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        });
    }

    changeLikeStatus(cardId, isLiked) {
        const method = !isLiked ? 'PUT' : 'DELETE';
        const url = `${this._url}/cards/${cardId}/likes`;
    
        return fetch(url, {
          method: method,
          headers: this._headers,
        })
        .then((response) => response.json());
    }

    deleteCardApi(cardId) {
        return this._sendRequest(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        }
    )}
}

export default Api