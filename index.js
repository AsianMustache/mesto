const editButtonElement = document.querySelector('.edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

editButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened');
});

closeButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened')});


let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup-container__name');
let descriptionInput = document.querySelector('.popup-container__description');

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    let nameValue = nameInput.value; // Получаем значение поля nameInput из свойства value
    let descriptionValue = descriptionInput.value; // Получаем значение поля descriptionInput из свойства value

    // Выбираем элементы, куда должны быть вставлены значения полей
    let infoName = document.querySelector('.info__name'); 
    let infoDescription = document.querySelector('.info__description');

    // Вставляем новые значения с помощью textContent
    infoName.textContent = nameValue; 
    infoDescription.textContent = descriptionValue;

    
}

//Сохраняем значения по кнопке и закрываем форму
let saveButton = document.querySelector('.popup-container__button');
const closeSaveButton = document.querySelector('.popup-container__button');
saveButton.addEventListener('click', handleFormSubmit);
closeSaveButton.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened')});
