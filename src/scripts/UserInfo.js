class UserInfo {
    constructor({ nameSelector, infoSelector }) {
      this._nameSelector = document.querySelector(nameSelector);
      this._infoSelector = document.querySelector(infoSelector);
    }
  
    getUserInfo() {
      return {
        name: this._nameSelector.textContent,
        info: this._infoSelector.textContent,
      };
    }
  
    setUserInfo({ newName, info }) {
      this._nameSelector.textContent = newName;
      this._infoSelector.textContent = info;
    }
  }

export default UserInfo;