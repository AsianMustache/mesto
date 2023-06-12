const editButtonElement = document.querySelector('.info__edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

editButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened');
})

closeButtonElement.addEventListener('click', () => {
    popupElement.classList.toggle('popup_opened');
})