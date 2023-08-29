//Переменные
import '../src/pages/index.css';
import Card from "../src/scripts/Card.js";
import { enableValidation, validators } from "../src/scripts/validate.js"
import Section from '../src/scripts/Section.js';
import Popup from '../src/scripts/Popup.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  disabledButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const editButtonElement = document.querySelector('.profile__info-edit-button'); //Находим кнопку редактирования профиля
const popupEditForm = document.querySelector('.popup_form_edit'); //Находим саму Попап форму редактирования
const editForm = popupEditForm.querySelector('.edit-form'); //Поиск формы редактирования
const addButtonElement = document.querySelector('.profile__add-button'); //Находим кнопку добавления нового места
const popupAddForm = document.querySelector('.popup_form_add'); //Контейнер добавления нового места
const addForm = popupAddForm.querySelector('.add-form'); //Находим саму форму добавления нового места
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
// const nameInput = editForm.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
// const descriptionInput = editForm.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную
const cardsContainer = document.querySelector('.elements'); //Находим поле для создания карточек
// const cardTemplate = document.querySelector('#template-elements').content; //Находим шаблон для создания карточек
const popupImageForm = document.querySelector('.popup_form_image'); //Попап картинки
const popupImage = popupImageForm.querySelector('.popup-image-container__image-fullscreen'); //Поиск селектора изображения полноэкранного
const popupImageTitle = popupImageForm.querySelector('.popup-image-container__title-fullscreen'); //Поиск селектора названия карточки изображения
// const textName = addForm.querySelector('.add-form__text_input_title'); //Поиск поля для ввода названия, формы добавления нового места
// const urlName = addForm.querySelector('.add-form__text_input_url'); //Поиск поля для ввода УРЛ, формы добавления нового места
const closeButtons = document.querySelectorAll('.popup-close') //Поиск всех кнопок закрытия попапов
// const containerPopup = document.querySelector('.popup-container');
// const containerPopupImage = document.querySelector('.popup-image-container');
// const popups = document.querySelectorAll('.popup');
const classPopup = new Popup('.popup')
const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit);
const nameElement = document.getElementById('name-place');
const urlElement = document.getElementById('url');
const inputName = document.querySelector('input[name="name"]');
const inputDescription = document.querySelector('input[name="description"]');
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
  const nameInputValue = values['name'];
  const urlInputValue = values.url;
  nameElement.textContent = nameInputValue;
  urlElement.textContent = urlInputValue;
  const cardElement = createCard(nameInputValue, urlInputValue);
  cardsContainer.prepend(cardElement);
})
classPopupWithFormAdd.setEventListeners();

function openPopup(popup) {
  classPopup.open();
}

function closePopup(popup) {
  classPopup.close();
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoDescription.textContent = inputDescription.value;
  classPopupWithFormEdit.close();
}

//Функция отрисовки карточки для добавления через сабмит кнопки Add
function createCard(name, link) {
  const createCardElement = new Card({
    name: name,
    link: link
  }, "#template-elements");
  return createCardElement.getCard();
}

function renderCards() {
  const section = new Section({
    items: initialCards,
    renderer: (card) => {
      const cardElement = new Card(card, '#template-elements');
      return cardsContainer.appendChild(cardElement.getCard());
    }
  }, '.elements');
  section.renderItems();
}

// Функция занесения данных при открытии формы редактирования
function handleEditButtonClick() {
  // const inputs = classPopupWithFormEdit._getInputValues();
  inputName.value = infoName.textContent;
  inputDescription.value = infoDescription.textContent;
  classPopupWithFormEdit.open();
}


// Функция открытия попапа изображения
function openPopupImage(imageUrl, name) {
  popupImage.src = imageUrl;
  popupImage.alt = `Увеличенное изображение - ${name}`;
  popupImageTitle.textContent = name;
  openPopup(popupImageForm);
}
//Универсальная функция закрытия попапов
closeButtons.forEach(() => {
  classPopup.setEventListeners();
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

export { openPopupImage };