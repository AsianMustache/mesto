//Переменные

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
  formEditSelector: '.edit-form',
  formAddSelector: '.add-form',
  inputEditSelector: '.edit-form__text',
  inputAddSelector: '.add-form__text',
  submitEditButtonSelector: '.edit-form__container-button',
  submitAddButtonSelector: '.add-form__container-button',
  submitAddButtonError: 'add-form__container-button_invalid',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorEditClass: 'edit-form__container-button_invalid',
  inputErrorAddClass: 'add-form__text_input_type_error',
  errorClass: 'popup__error_visible',
  inputAddEmail: 'add-form__text_input_url'
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
}
//Общая функция закрытия форм
function closePopup (popup) {
  popup.classList.remove('popup_opened');
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
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteImageButton = cardElement.querySelector('.element__image-delete');
  const deleteButton = cardElement.querySelector('.element__delete-button');
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__group-title');
  const likeButton = cardElement.querySelector('.element__group-favorite');
  const likeButtonPath = './images/favorite.svg';
  const likeActiveButtonPath = './images/Favorite-active.svg';
  likeButton.src = likeButtonPath;
  
  // likeButton.src = './images/favorite.svg';
  likeButton.alt = 'Избранное';  
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteImageButton.src = './images/Trash.svg';
  deleteImageButton.alt = 'Кнопка удаления';
  deleteButton.addEventListener('click', function handleDeleteElement () {
    const card = deleteButton.closest('.element');
    card.remove();
  });

  cardImage.addEventListener('click', () => {
    openPopupImage(link, name);
  })

  likeButton.addEventListener('click', () => {
    if (likeButton.getAttribute('src') === likeActiveButtonPath) {
      likeButton.src = likeButtonPath;
    } else {
      likeButton.src = likeActiveButtonPath;
    }
  });

  return cardElement;
}

function renderCards() {
  initialCards.forEach(function(card) {
    const cardElement = createCard(card.name, card.link);
    cardsContainer.appendChild(cardElement);
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
  addForm.reset();
  enableValidation(validationConfig);
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
  button.addEventListener('click', () => closePopup(popup));
});

//Функция закрытия попапов по клику за пределами форм
function handlePopupEvents(event) {
  const target = event.target;
  const isPopup = target.classList.contains('popup');
  // if (target === popupEditForm || target === popupAddForm || target === popupImageForm) {
  //   const container = target.querySelector('.popup-container') || target.querySelector('.popup-image-container');
  //   const clickOutsideForm = !container.contains(target);

  //   if (clickOutsideForm || event.key === 'Escape') {
  //     closePopup(target);
  //   }
  // }
  if (isPopup) {
    closePopup(target);
  }

}



//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {openPopup(popupAddForm)}); //Слушатель клика для открытия формы добавления нового места
editForm.addEventListener('submit', handleEditFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', handleAddFormSubmit); //Слушатель сабмита по кнопке формы добавления
document.addEventListener('click', handlePopupEvents);//Обработчик закрытия попапов за пределами попапа
//Обработчик закрытия форм по нажатию клавиши Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupEditForm);
    closePopup(popupAddForm);
    closePopup(popupImageForm);
  }
});


//Вызов функций
renderCards();
enableValidation(validationConfig);