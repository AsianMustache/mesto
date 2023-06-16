const editButtonElement = document.querySelector('.profile__info-edit-button'); //Находим кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup__container-close-button'); //находим кнопку закрытия формы
const popupElement = document.querySelector('.popup'); //Находим саму Попап форму
let formElement = document.querySelector('.edit-form');

let nameInput = document.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
let descriptionInput = document.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную


//Функция открытия формы
function openForm () {
  popupElement.classList.add('popup_opened');
  nameValue = infoName.textContent;
  descriptionValue = infoDescription.textContent;
}


//Функция закрытия формы
function closeForm () {
  popupElement.classList.remove('popup_opened')
}

//Добавляем слушатель по клику на кнопку редактирования
editButtonElement.addEventListener('click', openForm);

//Добавляем слушатель по клику на кнопку закрытия формы
closeButtonElement.addEventListener('click', closeForm);



// Выбираем элементы, куда должны быть вставлены значения полей
let infoName = document.querySelector('.profile__info-name');
let infoDescription = document.querySelector('.profile__info-description');

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    let nameValue = nameInput.value; // Получаем значение поля nameInput из свойства value
    let descriptionValue = descriptionInput.value; // Получаем значение поля descriptionInput из свойства value

    // Вставляем новые значения с помощью textContent
    infoName.textContent = nameValue; 
    infoDescription.textContent = descriptionValue;
    closeForm();
}

formElement.addEventListener('submit', handleFormSubmit);
