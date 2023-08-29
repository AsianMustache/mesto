import Popup from "./Popup";

// class PopupWithForm extends Popup {
//     constructor(popupSelector, handleFormSubmit){
//         super(popupSelector);
//         this._form = this._popup.querySelector('.popup__form');
//         this._handleFormSubmit = handleFormSubmit;
//         this._submitHandler = this._submitHandler.bind(this);
//     }

//     _getInputValues() {
//         const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
//         const values = {};
//         inputs.forEach((input) => {
//             values[input.name] = input.value;
//         });
//         return values;
//     }

//     _submitHandler(event) {
//         event.preventDefault();
//         const inputValues = this._getInputValues();
//         this._handleFormSubmit(inputValues);
//     }

//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', this._submitHandler);
//     }

//     close() {
//         super.close();
//         this._form.reset();
//     }
// }

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
        values[input.name] = input;
        values[input.name] = input.value;
      });
      console.log(values)
      return values;
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