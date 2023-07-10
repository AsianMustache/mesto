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
const closeButtonElement = document.querySelector('.popup__container-close-button'); //находим кнопку закрытия формы
const popupElement = document.querySelector('.popup'); //Находим саму Попап форму
const formElement = document.querySelector('.edit-form');
const addButtonElement = document.querySelector('.profile__add-button'); //Находим кнопку добавления нового места
const closeButtonAddFormElement = document.querySelector('.add-popup__container-close-button'); //находим кнопку закрытия формы добавления
const addPopupElement = document.querySelector('.add-popup'); //Находим саму форму добавления
const addFormElement = document.querySelector('.add-form');
// Выбираем элементы, куда должны быть вставлены значения полей
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
const nameInput = formElement.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = formElement.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную


//Функция открытия формы
function openPopup () {
  popupElement.classList.add('popup_opened');
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;
}

//Функция закрытия формы
function closePopup () {
  popupElement.classList.remove('popup_opened')
}

//Добавляем слушатель по клику на кнопку редактирования
editButtonElement.addEventListener('click', openPopup);
//Добавляем слушатель по клику на кнопку закрытия формы
closeButtonElement.addEventListener('click', closePopup);


addButtonElement.addEventListener('click', openAddPopup);
closeButtonAddFormElement.addEventListener('click', closeAddPopup);

function openAddPopup () {
  addPopupElement.classList.add('add-popup_opened');
}
function closeAddPopup () {
  addPopupElement.classList.remove('add-popup_opened')
}

function handleFormSubmit (evt) {
    evt.preventDefault();
       

    // Вставляем новые значения с помощью textContent
    infoName.textContent = nameInput.value; 
    infoDescription.textContent = descriptionInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);


document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#template-elements').content;

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

      return cardElement;
    }

    function renderCards() {
      initialCards.forEach(function(card) {
        const cardElement = createCard(card.name, card.link);
        cardsContainer.appendChild(cardElement);
      });

    }

    renderCards();

    function handleAddFormSubmit(ev) {
      ev.preventDefault();
  
      const textName = document.querySelector('.add-form__text_input_title').value;
      const urlName = document.querySelector('.add-form__text_input_url').value;
  
      const newCardElement = createCard(textName, urlName);
      cardsContainer.appendChild(newCardElement);
  
      closeAddPopup();
    }
  
    addFormElement.addEventListener('submit', handleAddFormSubmit);

    function openPopupImage (imageUrl, name) {
      const imagePopup = document.querySelector('.image-popup');
      const popupImage = imagePopup.querySelector('.image-popup__image-fullscreen');
      const popupImageTitle = imagePopup.querySelector('.image-popup__title-fullscreen')

      popupImage.src = imageUrl;
      popupImage.alt = 'Увеличенная картинка';
      popupImageTitle.textContent = name;
      imagePopup.classList.add('image-popup_opened');
    }

    function closePopupImage () {
      const imagePopup = document.querySelector('.image-popup');
      imagePopup.classList.remove('image-popup_opened');
    }

    const popupCloseButton = document.querySelector('.image-popup__close-button');
    popupCloseButton.addEventListener('click', closePopupImage);
});
