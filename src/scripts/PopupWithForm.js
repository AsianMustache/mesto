import Popup from "./Popup";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitCallback(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm