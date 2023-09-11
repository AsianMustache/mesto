import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      if (input.name === 'info') {
        // input.value = data[input.name];
        input.value = data.info;
      } else {
        input.value = data[input.name];
      }
      console.log(JSON.stringify(data));
        console.log(data);
    });
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputValues = this._getInputValues();
      this._handleSubmitForm(inputValues);
    });
    super.setEventListeners();
  }
}

export default PopupWithForm