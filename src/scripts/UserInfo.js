class UserInfo {
    constructor({ nameSelector, infoSelector }, avatarSelector) {
      this._inputName = document.querySelector(nameSelector);
      this._inputDescription = document.querySelector(infoSelector);
      this._avatarSelector = avatarSelector;
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
      this._avatarSelector.style.backgroundImage = `url(${this._avatar})`;
    }
    
  }

export default UserInfo;