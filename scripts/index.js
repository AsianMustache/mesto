//Переменные
import Card from "./MyCard.js";

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

//Функции
//Общая функция открытия форм
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}
//Общая функция закрытия форм
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  addForm.reset();
}
//Функция сохранения данных (Сабмита) формы редактирования
function handleEditFormSubmit (evt) {
  evt.preventDefault();
  // Вставляем новые значения с помощью textContent
  infoName.textContent = nameInput.value; 
  infoDescription.textContent = descriptionInput.value;
  closePopup(popupEditForm);
}
//Функция отрисовки карточек при загрузке страницы
// function createCard(name, link) {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   const deleteImageButton = cardElement.querySelector('.element__image-delete');
//   const deleteButton = cardElement.querySelector('.element__delete-button');
//   const cardImage = cardElement.querySelector('.element__image');
//   const cardTitle = cardElement.querySelector('.element__group-title');
//   const likeButton = cardElement.querySelector('.element__group-favorite');
//   const likeButtonPath = './images/favorite.svg';
//   const likeActiveButtonPath = './images/Favorite-active.svg';
//   likeButton.src = likeButtonPath;

//   likeButton.alt = 'Избранное';  
//   cardImage.src = link;
//   cardImage.alt = name;
//   cardTitle.textContent = name;

//   deleteImageButton.src = './images/Trash.svg';
//   deleteImageButton.alt = 'Кнопка удаления';
//   deleteButton.addEventListener('click', function handleDeleteElement () {
//     const card = deleteButton.closest('.element');
//     card.remove();
//   });

//   cardImage.addEventListener('click', () => {
//     openPopupImage(link, name);
//   })

//   likeButton.addEventListener('click', () => {
//     if (likeButton.getAttribute('src') === likeActiveButtonPath) {
//       likeButton.src = likeButtonPath;
//     } else {
//       likeButton.src = likeActiveButtonPath;
//     }
//   });

//   return cardElement;
// }

// function renderCards() {
//   initialCards.forEach(function(card) {
//     const cardElement = createCard(card.name, card.link);
//     cardsContainer.appendChild(cardElement);
//   });

// }


function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = new Card(card);
    cardsContainer.appendChild(cardElement.getCard());
  });
}

//Функция занесения данных при открытии формы редактирования
function handleEditButtonClick () {
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;
  openPopup(popupEditForm);
}

//Функция сохранения данных (Сабмита) формы добавления карточки
function handleAddFormSubmit(ev) {
  ev.preventDefault();
  const newCardElement = createCard(textName.value, urlName.value);
  cardsContainer.prepend(newCardElement);
  closePopup(popupAddForm);
  ev.submitter.classList.add('popup__button_disabled')
  ev.submitter.disabled = true;
}
//Функция открытия попапа изображения
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
  button.addEventListener('click', () => {
    closePopup(popup)
  });
});

//Функция закрытия попапов по клику за пределами форм
function handlePopupEvents(event) {
  const target = event.target;
  const isPopup = target.classList.contains('popup');
  if (isPopup) {
    closePopup(target);
  }
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}



//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {
  openPopup(popupAddForm)
  enableValidation(validationConfig);
}); //Слушатель клика для открытия формы добавления нового места
editForm.addEventListener('submit', handleEditFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', handleAddFormSubmit); //Слушатель сабмита по кнопке формы добавления
//Пробегаем по массиву popup для закрытия попапов за пределами попапа
popups.forEach((popup) => {
  popup.addEventListener('click', handlePopupEvents);
});

//Вызов функций
renderCards();
enableValidation(validationConfig);

export { openPopup }