import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setInputValues(data) {  
    const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    inputs.forEach((input) => {
      if (input.name === 'info') {
        input.value = data[input.name];
      } else {
        input.value = data[input.name];
      }
    });
  }
}

export default PopupWithForm