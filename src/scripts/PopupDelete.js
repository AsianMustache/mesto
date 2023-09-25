import Popup from './Popup.js';

class PopupDelete extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._deleteButton = this._popup.querySelector('.popup-container__delete-button');
    }

    open(handleSubmit) {
      this._submitHandler  = handleSubmit
      // super.open()
      console.log(handleSubmit)
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._deleteButton.addEventListener('click', () => this._submitHandler());
      this.close()
    }
  }

  export default PopupDelete;