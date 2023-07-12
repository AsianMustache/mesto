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

const editButton = document.querySelector('.profile__info-edit-button'); //Кнопка редактирования профиля
const closeButtonElement = document.querySelector('.popup__container-close-button'); //Кнопка закрытия формы
const popupForm = document.querySelector('.popup'); //Попап форма общая
const editPopupContainer = document.querySelector('.popup__container_form_edit') //Контейнер формы редактирования
const editForm = document.querySelector('.edit-form'); //Форма редактирования
const addButtonElement = document.querySelector('.profile__add-button'); //Кнопка добавления нового места
const closeButtonAddFormElement = document.querySelector('.add-popup__container-close-button'); //Кнопка закрытия формы добавления
const addPopupContainer = document.querySelector('.popup__container_form_add') //Контейнер формы добавления нового места
const infoName = document.querySelector('.profile__info-name'); //Переменная поля редактирования имени
const infoDescription = document.querySelector('.profile__info-description'); //Переменная поля редактирования профессии
const nameInput = editForm.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = editForm.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную
const cardsContainer = document.querySelector('.elements'); //Контейнер для всех карточек
const cardTemplate = document.querySelector('#template-elements').content; //Переменная для шаблона создания карточек
const popupCloseButton = document.querySelector('.image-popup__close-button'); //Кнопка закрытия окна увеличенного изображения

//Функции

//Функция создания карточек
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

//Функция открытия попапа

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

//Функция закрытия попапа

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}


//Обработчики событий

editButton.addEventListener('click', () => {
  openPopup(popupForm);
}) //Открытие формы редактирования

closeButtonElement.addEventListener

renderCards();