//Переменные
import '../src/pages/index.css';
import Card from "../src/scripts/Card.js";
import { enableValidation, validators } from "../src/scripts/validate.js"
import Section from '../src/scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupDelete from './scripts/PopupDelete';
import UserInfo from './scripts/UserInfo.js';
import {
  initialCards,
  validationConfig,
  editButtonElement,
  addButtonElement,
  popupAddForm,
  addForm,
  inputName,
  inputDescription
} from './utils/constants.js'
import Api from './scripts/Api';

const popupWithImage = new PopupWithImage('.popup_form_image'); //Экземпляр класса PopupWithImage
const newUserInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    infoSelector: '.profile__info-description'
});

const section = new Section({
  items: [],
  renderer: createCard
}, '.elements');
const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit);
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
  const nameInputValue = values['name-place'];
  const urlInputValue = values['url'];
  const cardElement = createCard(nameInputValue, urlInputValue);
  section.addItem(cardElement);
});                                                                    //Экземпляр класса PopupWithForm - добавление нового места
const avatarElement = document.getElementById('profile-avatar');
const nameElement = document.getElementById('profile-name');
const descriptionElement = document.getElementById('profile-description');
const cardsApi = { 
  url: 'https://mesto.nomoreparties.co/v1/cohort-75/cards', 
  headers: {
    authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
    'Content-Type': "application/json"
  }
}
const userInfoApi = {
  url: 'https://nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
    'Content-Type': "application/json"
  }
}

const classPopupDelete = new PopupDelete('.popup_form_delete', handleButtonDelete);
const api = new Api(cardsApi);
const userApi = new Api(userInfoApi);
const editApiUser = new Api(userInfoApi);
classPopupDelete.setSubmitHandler(() => {
  const cardForDelete = classPopupDelete._deleteButton.closest('.element');
  if (cardForDelete) {
    section.remove(cardForDelete);
  }
  console.log(cardForDelete)
});

function handleButtonDelete() {
  classPopupDelete.open();
}

function handleEditFormSubmit(inputValues) {
  const name = inputValues['name'];
  const info = inputValues['description'];
  // newUserInfo.setUserInfo({ name, info });

  editApiUser.editApiProfile(name, info)
    .then((data) => {
      newUserInfo.setUserInfo(data);
      classPopupWithFormEdit.close();
    })  
    .catch((error) => {
      console.log(error);
    });
  // classPopupWithFormEdit.close();
}

//Функция отрисовки карточки для добавления через сабмит кнопки Add
function createCard(name, link) {
  const createCardElement = new Card({
    name: name,
    link: link,
  }, "#template-elements", openPopupImage);
  return createCardElement.getCard();
}

// function renderCards() {
//   initialCards.forEach((card) => {
//     const cardElement = createCard(card.name, card.link);
//     section.addItem(cardElement);
//   });
//   section.renderItems();

//   const deleteButton = document.querySelector('.popup-container__delete-button');
//     deleteButton.addEventListener('click', () => {
//       classPopupDelete.setSubmitHandler(() => {
//         cardElement.remove();
//         console.log(cardElement);
//       });
//     });
// }

api.getAllCards()
  .then((cards) => {
    cards.forEach((card) => {
      const cardElement = createCard(card.name, card.link);
      section.addItem(cardElement);
    })
    section.renderItems();
  })

  userApi.getApiUserInfo()
  .then(userInfoApi => {
    avatarElement.src = userInfoApi.avatar;
    nameElement.textContent = userInfoApi.name;
    descriptionElement.textContent = userInfoApi.about;
  })
  .catch(error => {
    console.log(error);
  });

function handleEditButtonClick() {
  const userData = newUserInfo.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.info;
  classPopupWithFormEdit.open();
}

function openPopupImage(imageUrl, name) {
  popupWithImage.open(imageUrl, name);
}


//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {
  classPopupWithFormAdd.open();
  addForm.reset();
  validators[addForm.getAttribute('name')].toggleButtonState();
}); //Слушатель клика для открытия формы добавления нового места

//Закртыие форм по крестику
popupWithImage.setEventListeners();
classPopupWithFormEdit.setEventListeners();
classPopupWithFormAdd.setEventListeners();
classPopupDelete.setEventListeners();

popupAddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    classPopupWithFormAdd.close();
});


//Вызов функций

enableValidation(validationConfig);
// renderCards()
section.renderItems();
// export { openPopupImage };