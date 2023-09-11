class ProfileInfo {
    constructor({name, about, avatar}, profileSelector) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        this._profileContainer = document.querySelector(profileSelector);
    }

    renderProfile() {
        
    }
}