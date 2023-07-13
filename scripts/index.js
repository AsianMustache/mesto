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
const editButtonElement = document.querySelector('.profile__info-edit-button'); //Находим кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup-container__close-button'); //Находим кнопку закрытия формы
const popupEditForm = document.querySelector('.popup_form_edit'); //Находим саму Попап форму редактирования
const editForm = document.querySelector('.edit-form'); //Поиск формы редактирования
const addButtonElement = document.querySelector('.profile__add-button'); //Находим кнопку добавления нового места
const closeButtonAddFormElement = document.querySelector('.popup-container__add-popup-close-button'); //Находим кнопку закрытия формы добавления
const popupAddForm = document.querySelector('.popup_form_add'); //Контейнер добавления нового места
const addForm = popupAddForm.querySelector('.add-form'); //Находим саму форму добавления нового места
// Выбираем элементы, куда должны быть вставлены значения полей
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
const nameInput = editForm.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = editForm.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную
const cardsContainer = document.querySelector('.elements'); //Находим поле для создания карточек
const cardTemplate = document.querySelector('#template-elements').content; //Находим шаблон для создания карточек
const popupImageForm = document.querySelector('.popup_form_image'); //Попап картинки
const popupCloseButton = document.querySelector('.popup-image-container__close-button'); //Кнопка закрытия попапа изображения

const popupImage = popupImageForm.querySelector('.popup-image-container__image-fullscreen'); //Поиск селектора изображения полноэкранного
const popupImageTitle = popupImageForm.querySelector('.popup-image-container__title-fullscreen'); //Поиск селектора названия карточки изображения

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
function handleFormSubmit (evt) {
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
  const cardButtonImage = cardElement.querySelector('.element__group-favorite');
  
  cardButtonImage.src = './images/favorite.svg';
  cardButtonImage.alt = 'Избранное';  
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  deleteImageButton.src = './images/Trash.svg';
  deleteImageButton.alt = 'Кнопка удаления'
  deleteButton.addEventListener('click', function() {
    const card = deleteButton.closest('.element');
    card.remove();
  });

  cardImage.addEventListener('click', () => {
    openPopupImage(link, name);
  })

  cardButtonImage.addEventListener('click', () => {
    if (cardButtonImage.src.includes('Favorite-active.svg')) {
      cardButtonImage.src = './images/favorite.svg';
    } else {
      cardButtonImage.src = './images/Favorite-active.svg';
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
function handleAssignValuesToFields () {
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;
  openPopup(popupEditForm);
}

//Функция закрытия попапа добавления нового места через кнопку и сброс полей
function handleClosePopupAddForm () {
  closePopup(popupAddForm);
  addForm.reset();
}

//Функция сохранения данных (Сабмита) формы добавления карточки
function handleAddFormSubmit(ev) {
  ev.preventDefault();

  const textName = document.querySelector('.add-form__text_input_title').value;
  const urlName = document.querySelector('.add-form__text_input_url').value;
  const newCardElement = createCard(textName, urlName);

  cardsContainer.prepend(newCardElement);

  closePopup(popupAddForm);
  addForm.reset();
}
//Функция открытия попапа изображения
function openPopupImage(imageUrl, name) {
  popupImage.src = imageUrl;
  popupImage.alt = `Увеличенное изображение - ${name}`;
  popupImageTitle.textContent = name;
  openPopup(popupImageForm);
}

//Функция закрытия попапа изображений
function closePopupImage() {
  const imagePopup = document.querySelector('.popup_form_image');
  imagePopup.classList.remove('popup_opened');
}

//Обработчики событий (>>>Не получается передать именнованной функции обработчика - выдает ошибку, по вашему примеру<<<)
editButtonElement.addEventListener('click', handleAssignValuesToFields); //Слушатель клика для открытия формы редактирования 
closeButtonElement.addEventListener('click', () => {closePopup(popupEditForm)}); //Слушатель клика для закрытия формы редактирования
addButtonElement.addEventListener('click', () => {openPopup(popupAddForm)}); //Слушатель клика для открытия формы добавления нового места
closeButtonAddFormElement.addEventListener('click', handleClosePopupAddForm); //Слушатель клика для закрытия формы нового места
editForm.addEventListener('submit', handleFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', handleAddFormSubmit); //Слушатель сабмита по кнопке формы добавления
popupCloseButton.addEventListener('click', () => {closePopup(popupImageForm)}); //Слушатель клика по кнопке закрытия формы изображения

//Вызов функций
renderCards();