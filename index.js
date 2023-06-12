const editButtonElement = document.querySelector('.edit-button'); //Находим кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup__close-button'); //находим кнопку закрытия формы
const popupElement = document.querySelector('.popup'); //Находим саму Попап форму

//Добавляем слушатель по клику на кнопку редактирования
editButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened');
});

//Добавляем слушатель по клику на кнопку закрытия формы
closeButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened')});


let formElement = document.querySelector('.popup'); //Находим ПОПАП форму и присваиваем переменную
let nameInput = document.querySelector('.popup-container__name'); //Находим поле ввода имени и присваиваем переменную
let descriptionInput = document.querySelector('.popup-container__description'); //Находим поле ввода описания и присваиваем переменную

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
