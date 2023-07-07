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

// Выбираем элементы, куда должны быть вставлены значения полей
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');

const nameInput = formElement.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = formElement.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную

// let nameValue = nameInput.value; // Получаем значение поля nameInput из свойства value
// let descriptionValue = descriptionInput.value; // Получаем значение поля descriptionInput из свойства value


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

  function createCard(name, link) {
    const cardTemplate = document.createElement('article');
    cardTemplate.classList.add('element');

    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.classList.add('element__delete-button');
    cardTemplate.appendChild(cardDeleteButton);

    const cardDeleteImg = document.createElement('img');
    cardDeleteImg.classList.add('element__delete-image');
    cardDeleteImg.src = "./images/Trash.svg";
    cardDeleteImg.alt = "Кнопка удаления"
    cardDeleteButton.appendChild(cardDeleteImg);
    
    const cardImage = document.createElement('img');
    cardImage.classList.add('element__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardTemplate.appendChild(cardImage);

    const cardGroup = document.createElement('div');
    cardGroup.classList.add('element__group');
    cardTemplate.appendChild(cardGroup);

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('element__group-title');
    cardTitle.textContent = name;
    cardGroup.appendChild(cardTitle);

    const cardButton = document.createElement('button');
    cardButton.classList.add('element__group-button');
    cardGroup.appendChild(cardButton);

    const cardButtonImage = document.createElement('img');
    cardButtonImage.classList.add('element__group-favorite');
    cardButtonImage.src = './images/favorite.svg';
    cardButtonImage.alt = 'Избранное';
    cardButton.appendChild(cardButtonImage);

    return cardTemplate;
  }

  function renderCards() {
    initialCards.forEach(function(card) {
      const cardElement = createCard(card.name, card.link);
      cardsContainer.appendChild(cardElement);
    });
  }

  renderCards();

  function deleteCards() {
    const buttonsDelete = document.querySelectorAll('.element__delete-button');

    buttonsDelete.forEach(function(buttonDelete) {
      buttonDelete.addEventListener('click', function() {
        const card = buttonDelete.closest('.element');
        card.remove();
      });
    });
  }

  deleteCards();
});


