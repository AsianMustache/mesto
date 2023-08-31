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

const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit); //Экземпляр класса PopupWithForm
// const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
//   const nameInputValue = values['name-place'];
//   const urlInputValue = values['url'];
//   nameElement.textContent = nameInputValue;
//   urlElement.textContent = urlInputValue;
//   const cardElement = createCard(nameInputValue, urlInputValue);
//   cardsContainer.prepend(cardElement);
// })                                                                    //Экземпляр класса PopupWithForm - добавление нового места
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
  const nameInputValue = values['name-place'];
  const urlInputValue = values['url'];
  const cardElement = createCard(nameInputValue, urlInputValue);
  section.addItem(cardElement);
});
classPopupWithFormAdd.setEventListeners();


function handleEditFormSubmit(evt) {
  // evt.preventDefault();
  const name = inputName.value;
  const info = inputDescription.value;
  newUserInfo.setUserInfo({ name, info });

  classPopupWithFormEdit.close();
}

//Функция отрисовки карточки для добавления через сабмит кнопки Add
function createCard(name, link) {
  const createCardElement = new Card({
    name: name,
    link: link,
  }, "#template-elements");
  return createCardElement.getCard();
}

function renderCards() {
  const section = new Section({
    items: initialCards,
    renderer: (card) => {
      const cardElement = createCard(card.name, card.link);
      return cardsContainer.appendChild(cardElement);
    }
  }, '.elements');
  section.renderItems();
}

function handleEditButtonClick() {
  // const userInfo = new UserInfo({
  //   nameSelector: '.profile__info-name',
  //   infoSelector: '.profile__info-description'
  // });

  const userData = newUserInfo.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.info;
  classPopupWithFormEdit.open();
}


function openPopupImage(imageUrl, name) {
  popupWithImage.open(imageUrl, `${name}`);
}
popupWithImage.setEventListeners();

//Универсальная функция закрытия попапов
classPopupWithFormEdit.setEventListeners();

closeButtons.forEach(() => {
  popupWithImage.setEventListeners();
});


//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {
  classPopupWithFormAdd.open();
  addForm.reset();
  validators[addForm.getAttribute('name')].toggleButtonState();
}); //Слушатель клика для открытия формы добавления нового места
editForm.addEventListener('submit', handleEditFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    classPopupWithFormAdd.close();
});

//Вызов функций

enableValidation(validationConfig);
renderCards()
section.renderItems();
export { openPopupImage };