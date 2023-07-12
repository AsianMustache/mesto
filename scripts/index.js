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
const popupEditForm = document.querySelector('.popup_form_edit'); //Находим саму Попап форму
const editForm = document.querySelector('.edit-form');
const addButtonElement = document.querySelector('.profile__add-button'); //Находим кнопку добавления нового места
const closeButtonAddFormElement = document.querySelector('.popup-container__add-popup-close-button'); //Находим кнопку закрытия формы добавления
// const addpopupEditForm = document.querySelector('.add-popup'); //Находим саму форму добавления
const popupAddForm = document.querySelector('.popup_form_add');
// Выбираем элементы, куда должны быть вставлены значения полей
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
const nameInput = editForm.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = editForm.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#template-elements').content;
const popupImageForm = document.querySelector('.popup_form_image');
const popupCloseButton = document.querySelector('.image-popup__close-button');

//Функции
//Функция открытия формы
// function openPopup () {
//   popupEditForm.classList.add('popup_opened');
//   nameInput.value = infoName.textContent;
//   descriptionInput.value = infoDescription.textContent;
// }

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

//Функция закрытия формы

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

// function closePopup (popupEditForm) {
//   popupEditForm.classList.remove('popup_opened');
// }

// function openAddPopup () {
//   popupEditForm.classList.add('popup_opened');
// }
// function closePopup (addpopupEditForm) {
//   popupAddForm.reset();
//   addpopupEditForm.classList.remove('add-popup_opened');
// }

function handleFormSubmit (evt) {
  evt.preventDefault();
  // Вставляем новые значения с помощью textContent
  infoName.textContent = nameInput.value; 
  infoDescription.textContent = descriptionInput.value;
  closePopup(popupEditForm);
}

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

function handleAddFormSubmit(ev) {
  ev.preventDefault();

  const textName = document.querySelector('.add-form__text_input_title').value;
  const urlName = document.querySelector('.add-form__text_input_url').value;

  const newCardElement = createCard(textName, urlName);
  cardsContainer.prepend(newCardElement);

  closePopup(popupAddForm);
  popupAddForm.reset();
}

function openPopupImage(imageUrl, name) {
  const imagePopup = document.querySelector('.popup_form_image');
  const popupImage = imagePopup.querySelector('.image-popup__image-fullscreen');
  const popupImageTitle = imagePopup.querySelector('.image-popup__title-fullscreen');

  popupImage.src = imageUrl;
  popupImage.alt = 'Увеличенная картинка';
  popupImageTitle.textContent = name;
  imagePopup.classList.add('popup_opened');
}

function closePopupImage() {
  const imagePopup = document.querySelector('.popup_form_image');
  imagePopup.classList.remove('popup_opened');
}

//Обработчики событий

editButtonElement.addEventListener('click', () => {openPopup(popupEditForm)}); //Слушатель клика для открытия формы редактирования
closeButtonElement.addEventListener('click', () => {closePopup(popupEditForm)}); //Слушатель клика для закрытия формы редактирования

addButtonElement.addEventListener('click', () => {openPopup(popupAddForm)}); //Слушатель клика для открытия формы добавления нового места
closeButtonAddFormElement.addEventListener('click', () => {closePopup(popupAddForm)}); //Слушатель клика для закрытия формы нового места


editForm.addEventListener('submit', handleFormSubmit); //Слушатель сабмита по кнопке формы редактирования
popupAddForm.addEventListener('submit', handleAddFormSubmit); //Слушатель сабмита по кнопке формы добавления
popupCloseButton.addEventListener('click', () => {
  closePopup(popupImageForm)
});

//Вызов функций
renderCards();