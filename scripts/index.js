const editButtonElement = document.querySelector('.profile__info-edit-button'); //Находим кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup__container-close-button'); //находим кнопку закрытия формы
const popupElement = document.querySelector('.popup'); //Находим саму Попап форму
const formElement = document.querySelector('.edit-form');

// Выбираем элементы, куда должны быть вставлены значения полей
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');

const nameInput = document.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
const descriptionInput = document.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную


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
    
    let nameValue = nameInput.value; // Получаем значение поля nameInput из свойства value
    let descriptionValue = descriptionInput.value; // Получаем значение поля descriptionInput из свойства value

    // Вставляем новые значения с помощью textContent
    infoName.textContent = nameValue; 
    infoDescription.textContent = descriptionValue;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
