class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popup.classList.add('popup-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(){}
    setEventListeners(){}
}
export default Popup;