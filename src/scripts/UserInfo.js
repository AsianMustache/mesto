class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent,
        };
    }

    setUserInfo() {
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
    }
}

export default UserInfo;