import Popup from './Popup.js';

// class PopupDelete extends Popup {
//     constructor(popupSelector, handleButtonDelete) {
//       super(popupSelector);
//       this._handleButtonDelete = handleButtonDelete;
//       this._deleteButton = this._popup.querySelector('.popup-container__delete-button');
//     }

//     setEventListeners() {
//         this._deleteButton.addEventListener('click', () => {
//             this._handleButtonDelete();
//             this.close()
//         });
//         super.setEventListeners();
//     }
//   }
// class PopupDelete extends Popup {
//     constructor(popupSelector, handleButtonDelete) {
//       super(popupSelector);
//       this._handleButtonDelete = handleButtonDelete;
//       this._deleteButton = this._popup.querySelector('.popup-container__delete-button');
//     }   

//     // _deleteCardButton() {
//     //     this._deleteButton = this._popup.querySelector('.popup-container__delete-button');
//     // }

//     setEventListeners() {
//       this._deleteButton.addEventListener('click', () => {
//         const element = this._deleteButton.closest('.element');
//         element.remove();
//         this.close();
//       });
//       super.setEventListeners();
//     }
//   }

class PopupDelete extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._deleteButton = this._popup.querySelector('.popup-container__delete-button');
    }

    open(handleSubmit) {
      this._submitHandler  = handleSubmit
      // super.open()
      console.log(this._submitHandler)
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._deleteButton.addEventListener('click', () => this._submitHandler());
      
    }
  }

  export default PopupDelete;