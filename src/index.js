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
const nameInput = editForm.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = editForm.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную
const cardsContainer = document.querySelector('.elements'); //Находим поле для создания карточек
const cardTemplate = document.querySelector('#template-elements').content; //Находим шаблон для создания карточек
const popupImageForm = document.querySelector('.popup_form_image'); //Попап картинки
const popupImage = popupImageForm.querySelector('.popup-image-container__image-fullscreen'); //Поиск селектора изображения полноэкранного
const popupImageTitle = popupImageForm.querySelector('.popup-image-container__title-fullscreen'); //Поиск селектора названия карточки изображения
const textName = addForm.querySelector('.add-form__text_input_title'); //Поиск поля для ввода названия, формы добавления нового места
const urlName = addForm.querySelector('.add-form__text_input_url'); //Поиск поля для ввода УРЛ, формы добавления нового места
const closeButtons = document.querySelectorAll('.popup-close') //Поиск всех кнопок закрытия попапов
const containerPopup = document.querySelector('.popup-container');
const containerPopupImage = document.querySelector('.popup-image-container');
const popups = document.querySelectorAll('.popup');
const classPopup = new Popup('.popup')
const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit);
// const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', handleAddFormSubmit);
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


//Функции
//Общая функция открытия форм
// function openPopup (popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// }

function openPopup(popup) {
  classPopup.open();
}

//Общая функция закрытия форм
// function closePopup (popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
// }

function closePopup(popup) {
  classPopup.close();
}

//Функция сохранения данных (Сабмита) формы редактирования
// function handleEditFormSubmit (evt) {
//   evt.preventDefault();
//   // Вставляем новые значения с помощью textContent
//   infoName.textContent = nameInput.value; 
//   infoDescription.textContent = descriptionInput.value;
//   closePopup(popupEditForm);
// }

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  // const inputValues = classPopupWithFormEdit._getInputValues();
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
// Рендер карточек
// function renderCards() {
//   initialCards.forEach((card) => {
//     const cardElement = new Card(card, '#template-elements');
//     cardsContainer.appendChild(cardElement.getCard());
//   });
// }

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
// function handleEditButtonClick () {
//   nameInput.value = infoName.textContent;
//   descriptionInput.value = infoDescription.textContent;
//   openPopup(popupEditForm);
// }

// function handleEditButtonClick() {
//   const inputValues = classPopupWithForm._getInputValues();
//   inputValues['name'].value = infoName.textContent;
//   inputValues['description'].value = infoDescription.textContent;
//   classPopupWithForm.open();
// }

function handleEditButtonClick() {
  const inputs = classPopupWithFormEdit._getInputValues();
  // const nameInput = inputs['name'];
  
  // const descriptionInput = inputs['description'];
  
  inputName.value = infoName.textContent;
  inputDescription.value = infoDescription.textContent;
  classPopupWithFormEdit.open();
}

//Функция сохранения данных (Сабмита) формы добавления карточки
// function handleAddFormSubmit(ev) {
//   ev.preventDefault();
//   const newCardElement = createCard(textName.value, urlName.value);
//   cardsContainer.prepend(newCardElement);
//   closePopup(popupAddForm);
// }

// function handleAddFormSubmit(ev) {
//   ev.preventDefault();
//   const inputValues = classPopupWithFormAdd.setEventListeners();
//   const textinputValue = inputValues['textName'].value;
//   const urlInputValue = inputValues['urlName'].value;
//   const newCardElement = createCard(textinputValue, urlInputValue);
//   cardsContainer.prepend(newCardElement);
//   classPopupWithFormAdd.close();
// }

// function handleAddFormSubmit(ev) {
//   ev.preventDefault();
//   const popupAddForm = new PopupWithForm('.popup_form_add', (inputValues) => {
//     const textInputValue = inputValues.name;
//     const urlInputValue = inputValues.url;
//     const newCardElement = createCard(textInputValue, urlInputValue);
//     cardsContainer.prepend(newCardElement);
//     popupAddForm.close();
//   });
//   popupAddForm.setEventListeners();
// }


// Функция открытия попапа изображения
function openPopupImage(imageUrl, name) {
  popupImage.src = imageUrl;
  popupImage.alt = `Увеличенное изображение - ${name}`;
  popupImageTitle.textContent = name;
  openPopup(popupImageForm);
}
//Универсальная функция закрытия попапов
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  // button.addEventListener('click', () => {
  //   closePopup(popup)
  // });
  classPopup.setEventListeners();
});

//Функция закрытия попапов по клику за пределами форм
// function handlePopupEvents(event) {
//   const target = event.target;
//   const isPopup = target.classList.contains('popup');
//   if (isPopup) {
//     closePopup(target);
//   }
// }

// function closeByEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }



//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
// addButtonElement.addEventListener('click', () => {
//   openPopup(popupAddForm);
//   addForm.reset();
//   validators[addForm.getAttribute('name')].toggleButtonState();
// }); //Слушатель клика для открытия формы добавления нового места
addButtonElement.addEventListener('click', () => {
  classPopupWithFormAdd.open();
  addForm.reset();
  validators[addForm.getAttribute('name')].toggleButtonState();
}); //Слушатель клика для открытия формы добавления нового места
editForm.addEventListener('submit', handleEditFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    classPopupWithFormAdd.close();
}); //Слушатель сабмита по кнопке формы добавления

//Пробегаем по массиву popup для закрытия попапов за пределами попапа
// popups.forEach((popup) => {
//   popup.addEventListener('click', handlePopupEvents);
// });
// popups.forEach((popup) => {
//   classPopup.setEventListeners();
// });

//Вызов функций
// renderCards();
enableValidation(validationConfig);
renderCards()

export { openPopupImage };