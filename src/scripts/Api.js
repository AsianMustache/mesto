class Api {
    constructor({url, headers}, _id) {
        this._url = url;
        this._headers = headers;
        this._id = _id;
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
        return this._sendRequest(`${this._url}`, {
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
        return this._sendRequest(`${this._url}`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        });
    }

    likeCard() {
        return fetch(`${this._url}/cards/${this._id}/likes`, {
          method: 'PUT',
          headers: this._headers,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Error');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      unlikeCard() {
        return fetch(`${this._url}/cards/${this._id}/likes`, {
          method: 'DELETE',
          headers: this._headers,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Error');
          })
          .catch((error) => {
            console.log(error);
          });
      }


}

export default Api