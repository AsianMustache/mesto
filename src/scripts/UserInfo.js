class UserInfo {
    constructor({ nameSelector, infoSelector }) {
      this._inputName = document.querySelector(nameSelector);
      this._inputDescription = document.querySelector(infoSelector);
    }
  
    getUserInfo() {
      return {
        name: this._name,
        about: this._about,
        id: this._id
      };
    }
  
    setUserInfo({ name, about, avatar, _id }) {
      this._name = name;
      this._about = about;
      this._avatar = avatar;
      this._id = _id;
      this._inputName.textContent = name;
      this._inputDescription.textContent = about;
    }
    
  }

export default UserInfo;