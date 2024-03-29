//Переменные
import '../src/pages/index.css';
import Card from "../src/scripts/Card.js";
import { enableValidation, validators } from "../src/scripts/validate.js"
import Section from '../src/scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupDelete from './scripts/PopupDelete.js';
import UserInfo from './scripts/UserInfo.js';
import {
  popupEditForm,
  validationConfig,
  editButtonElement,
  addButtonElement,
  popupAddForm,
  addForm,
  inputName,
  inputDescription,
  nameElement,
  urlElement,
  optionsApi
} from './utils/constants.js'
import Api from './scripts/Api.js';

const popupWithImage = new PopupWithImage('.popup_form_image'); //Экземпляр класса PopupWithImage
const avatarElement = document.querySelector('.profile__avatar');
const currentUser = new UserInfo({
    nameSelector: '.profile__info-name',
    infoSelector: '.profile__info-description',
}, avatarElement);
const popupEditAvatar = new PopupWithForm('.popup_form_edit-avatar', handleEditAvatarFormSubmit);
const popupDelete = new PopupDelete('.popup_form_delete')

const section = new Section({
  items: [],
  renderer: createCard
}, '.elements');
const classPopupWithFormEdit = new PopupWithForm('.popup_form_edit', handleEditFormSubmit);
const classPopupWithFormAdd = new PopupWithForm('.popup_form_add', handleAddFormSubmit);            //Экземпляр класса PopupWithForm - добавление нового места


const api = new Api(optionsApi);

function handleEditFormSubmit(inputValues) {
  const name = inputValues['name'];
  const about = inputValues['description'];
  classPopupWithFormEdit.showPreloader()
  api.editApiProfile(name, about)
    .then((data) => {
      currentUser.setUserInfo(data);
      classPopupWithFormEdit.close();
    })  
    .catch((error) => {
      console.log(error);
    })
    .finally(() => classPopupWithFormEdit.showPreloader(false))
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
    () => 
     popupDelete.open(() => {
        api.deleteCardApi(id)
          .then(() => {
            createCardElement.deleteCard();
            popupDelete.close();
          })
          .catch((error) => {
            console.log(error);
          });
      }), currentUser.getUserInfo().id);
  return createCardElement.getCard();
}

api.getApiUserInfo()
  .then(user => {
    currentUser.setUserInfo(user)
    const backgroundImage = `url(${user.avatar})`;
    avatarElement.style.backgroundImage = backgroundImage;
  })
    .then(() => api.getAllCards())
    .then((cards) => {
      const {id: userId} = currentUser.getUserInfo()
      cards.reverse().forEach((card) => {
        const isLiked = card.likes.some((user) => user._id === userId)
        const cardElement = createCard({
          name: card.name,
          link: card.link,
          id: card._id,
          likes: card.likes,
          isLiked: isLiked,
          ownerId: card.owner._id
        });
        section.addItem(cardElement);
      });
  
      section.renderItems();
    })
  .catch(error => {
    console.log(error);
});

function handleEditAvatarFormSubmit(inputValues) {
  const avatarUrl = inputValues['url'];
  popupEditAvatar.showPreloader()
  api.editAvatar(avatarUrl)
    .then((data) => {
      currentUser.setUserInfo(data);
      popupEditAvatar.close();
      const formName = popupEditAvatar.getFormName();
      validators[formName].toggleButtonState();
    })
    .catch((error) => {  
      console.log(error);
    })
    .finally(() => popupEditAvatar.showPreloader(false) )
}

function handleEditButtonClick() {
  const userData = currentUser.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.about;
  classPopupWithFormEdit.open();
}

function openPopupImage(imageUrl, name) {
  popupWithImage.open(imageUrl, name);
}

function handleAddFormSubmit(inputValues) {

  const nameInputValue = inputValues['name-place'];
  const urlInputValue = inputValues.url;
  classPopupWithFormAdd.showPreloader()
  api.addNewCardApi(nameInputValue, urlInputValue)
    .then((data) => {
      const cardElement = createCard({
        name: data.name,
        link: data.link,
        id: data._id,
        likes: data.likes,
        isLiked: false,
        ownerId: data.owner._id
      });
      section.addItem(cardElement);
      classPopupWithFormAdd.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => { classPopupWithFormAdd.showPreloader(false) })
}

//Обработчики событий
editButtonElement.addEventListener('click', handleEditButtonClick); //Слушатель клика для открытия формы редактирования 
addButtonElement.addEventListener('click', () => {
  classPopupWithFormAdd.open();
  addForm.reset();
  validators[addForm.getAttribute('name')].toggleButtonState();
}); //Слушатель клика для открытия формы добавления нового места

avatarElement.addEventListener('click', () => {
  const avatarEditPopup = document.querySelector('.popup_form_edit-avatar');
  const avatarEditForm = avatarEditPopup.querySelector('.avatar-edit-form');
  popupEditAvatar.open();
  avatarEditForm.reset();
  validators[avatarEditForm.getAttribute('name')].toggleButtonState();
});

//Закртыие форм по крестику
popupWithImage.setEventListeners();
classPopupWithFormEdit.setEventListeners();
classPopupWithFormAdd.setEventListeners();
popupDelete.setEventListeners();
popupEditAvatar.setEventListeners();
// popupAddForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const nameInputValue = nameElement.value;
//   const urlInputValue = urlElement.value;

//   api.addNewCardApi(nameInputValue, urlInputValue)
//     .then((data) => {
//       const cardElement = createCard({
//         name: data.name,
//         link: data.link,
//         id: data._id,
//         likes: data.likes,
//         isLiked: false,
//         ownerId: data.owner._id
//       });
//       section.addItem(cardElement);
//       classPopupWithFormAdd.close();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });



//Вызов функций
enableValidation(validationConfig);