//Переменные
import '../src/pages/index.css';
import Card from "../src/scripts/Card.js";
import { enableValidation, validators } from "../src/scripts/validate.js"
import Section from '../src/scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupDelete from './scripts/PopupDelete';
import UserInfo from './scripts/UserInfo.js';
import {
  initialCards,
  validationConfig,
  editButtonElement,
  addButtonElement,
  popupAddForm,
  addForm,
  inputName,
  inputDescription,
  nameElement,
  urlElement
} from './utils/constants.js'
import Api from './scripts/Api';

const popupWithImage = new PopupWithImage('.popup_form_image'); //Экземпляр класса PopupWithImage
const currentUser = new UserInfo({
    nameSelector: '.profile__info-name',
    infoSelector: '.profile__info-description'
    
    //смену аватара добавить
});

const popupDelete = new PopupDelete('.popup_form_delete')

const section = new Section({
  items: [],
  renderer: createCard
}, '.elements');
const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit);
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', (values) => {
  // const nameInputValue = values['name-place'];
  // const urlInputValue = values['url'];
  // const cardElement = createCard(nameInputValue, urlInputValue);
  // section.addItem(cardElement);
});                                                                    //Экземпляр класса PopupWithForm - добавление нового места
const avatarElement = document.getElementById('profile-avatar');

const cardsApi = { 
  url: 'https://mesto.nomoreparties.co/v1/cohort-75/cards', 
  headers: {
    authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
    'Content-Type': "application/json"
  }
};
const userInfoApi = {
  url: 'https://nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
    'Content-Type': "application/json"
  }
}
const api = new Api(cardsApi);
const userApi = new Api(userInfoApi);

function handleEditFormSubmit(inputValues) {
  const name = inputValues['name'];
  const about = inputValues['description'];

  userApi.editApiProfile(name, about)
    .then((data) => {
      currentUser.setUserInfo(data);
      classPopupWithFormEdit.close();
    })  
    .catch((error) => {
      console.log(error);
    });
}

// Функция отрисовки карточки для добавления через сабмит кнопки Add
function createCard({name, link, id, likes, isLiked, ownerId}) {
  const createCardElement = new Card({
    name: name,
    link: link,
    id: id,
    likes: likes,
    isLiked: isLiked,
    ownerId: ownerId
  }, "#template-elements",
  openPopupImage,
    (isLiked) => api.changeLikeStatus(id, isLiked),
    () => {
      popupDelete.open(() => {
        api.deleteCard(id)
          .then(() => {
            cardElement.remove();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }, currentUser.getUserInfo().id
  );
  return createCardElement.getCard();
}

api.getAllCards()
  .then((cards) => {
    const {id: userId} = currentUser.getUserInfo()
    cards.forEach((card) => {
      const isLiked = card.likes.some((user) => user._id === userId)
      const cardElement = createCard({
        name: card.name,
        link: card.link,
        id: card._id,
        likes: card.likes,
        isLiked: isLiked,
        ownerId: card.owner._id
      }, currentUser.getUserInfo().id);
      section.addItem(cardElement);
    });

    section.renderItems();
  })
  .catch((error) => {
    console.log(error);
  });

userApi.getApiUserInfo()
  .then(user => {
    currentUser.setUserInfo(user)
    avatarElement.src = user.avatar;
  })
  .catch(error => {
    console.log(error);
});



function handleEditButtonClick() {
  const userData = currentUser.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.about;
  classPopupWithFormEdit.open();
}

function openPopupImage(imageUrl, name) {
  popupWithImage.open(imageUrl, name);
}


//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {
  classPopupWithFormAdd.open();
  addForm.reset();
  validators[addForm.getAttribute('name')].toggleButtonState();
}); //Слушатель клика для открытия формы добавления нового места


//Закртыие форм по крестику
popupWithImage.setEventListeners();
classPopupWithFormEdit.setEventListeners();
classPopupWithFormAdd.setEventListeners();
popupDelete.setEventListeners();

popupAddForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInputValue = nameElement.value;
  const urlInputValue = urlElement.value;

  api.addNewCardApi(nameInputValue, urlInputValue)
    .then((data) => {
      const cardElement = createCard({
        name: data.name,
        link: data.link,
        id: data._id,
        likes: data.likes});
      section.addItem(cardElement);
      classPopupWithFormAdd.close();
    })
    .catch((error) => {
      console.log(error);
    });
});

//Вызов функций
enableValidation(validationConfig);