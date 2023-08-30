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
const cardsContainer = document.querySelector('.elements'); //Находим поле для создания карточек
const closeButtons = document.querySelectorAll('.popup-close') //Поиск всех кнопок закрытия попапов
// const classPopup = new Popup('.popup') //экземпляр класса Popup
const popupWithFormEdit = new Popup('.popup_form_edit');
const popupWithFormAdd = new Popup('.popup_form_add');
const newUserInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    infoSelector: '.profile__info-description'
  })

const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit); //Экземпляр класса PopupWithForm
const nameElement = document.getElementById('name-place'); //Переменная с ID имени формы добавления карточки
const urlElement = document.getElementById('url'); //Переменная с ID url формы добавления карточки
const inputName = document.querySelector('input[name="name"]'); //Поиск элемента input, у которого атрибут равен name
const inputDescription = document.querySelector('input[name="description"]'); //Поиск элемента input, у которого атрибут равен description
const popupWithImage = new PopupWithImage('.popup_form_image'); //Экземпляр класса PopupWithImage
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
  const nameInputValue = values['name-place'];
  const urlInputValue = values['url'];
  nameElement.textContent = nameInputValue;
  urlElement.textContent = urlInputValue;
  const cardElement = createCard(nameInputValue, urlInputValue);
  cardsContainer.prepend(cardElement);
})                                                                    //Экземпляр класса PopupWithForm - добавление нового места
classPopupWithFormAdd.setEventListeners();


function handleEditFormSubmit(evt) {
  evt.preventDefault();
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
  const userInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    infoSelector: '.profile__info-description'
  });

  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.info;

  classPopupWithFormEdit.open();
}


function openPopupImage(imageUrl, name) {
  popupWithImage.open(imageUrl, `${name}`);
}
popupWithImage.setEventListeners();

//Универсальная функция закрытия попапов
// closeButtons.forEach(() => {
//   classPopup.setEventListeners();
// });
closeButtons.forEach(() => {
  popupWithFormEdit.setEventListeners();
});
closeButtons.forEach(() => {
  popupWithFormAdd.setEventListeners();
});
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

export { openPopupImage };