//Переменные
import '../src/pages/index.css';
import Card from "../src/scripts/Card.js";
import { enableValidation, validators } from "../src/scripts/validate.js"
import Section from '../src/scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import {
  initialCards,
  validationConfig,
  editButtonElement,
  popupEditForm,
  editForm,
  addButtonElement,
  popupAddForm,
  addForm,
  cardsContainer,
  closeButtons,
  nameElement,
  urlElement,
  inputName,
  inputDescription
} from './utils/constants.js'

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


function handleEditFormSubmit(inputValues) {
  const name = inputValues['name'];
  const info = inputValues['description'];
  newUserInfo.setUserInfo({ name, info });

  classPopupWithFormEdit.close();
}

//Функция отрисовки карточки для добавления через сабмит кнопки Add
function createCard(name, link) {
  const createCardElement = new Card({
    name: name,
    link: link,
  }, "#template-elements", openPopupImage);
  return createCardElement.getCard();
}

function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = createCard(card.name, card.link);
    section.addItem(cardElement);
  });
  section.renderItems();
}

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

popupAddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    classPopupWithFormAdd.close();
});
//Вызов функций

enableValidation(validationConfig);
renderCards()
section.renderItems();
// export { openPopupImage };