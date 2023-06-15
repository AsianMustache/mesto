const editButtonElement = document.querySelector('.profile__info-edit-button'); //Находим кнопку редактирования профиля
const closeButtonElement = document.querySelector('.popup__container-close-button'); //находим кнопку закрытия формы
const popupElement = document.querySelector('.popup'); //Находим саму Попап форму
let formElement = document.querySelector('.edit-form');

let nameInput = document.querySelector('.edit-form__text_input_name'); //Находим поле ввода имени и присваиваем переменную
let descriptionInput = document.querySelector('.edit-form__text_input_description'); //Находим поле ввода описания и присваиваем переменную

function setDefaultValues () {
    let defaultName = "Жак-Ив Кусто";
    let defaultDescription = "Исследователь океана";

    if (nameInput.value === "") {
        nameInput.value = defaultName;
        infoName.value = defaultName;
      }
      if (descriptionInput.value === "") {
        descriptionInput.value = defaultDescription;
        infoDescription.value = defaultDescription;
      }
}

//Функция открытия/закрытия формы
function toggleForm () {
    popupElement.classList.toggle('popup_opened');
    setDefaultValues();
};

//Добавляем слушатель по клику на кнопку редактирования
editButtonElement.addEventListener('click', toggleForm);

//Добавляем слушатель по клику на кнопку закрытия формы
closeButtonElement.addEventListener('click', toggleForm);



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
    toggleForm();
}

formElement.addEventListener('submit', handleFormSubmit);
