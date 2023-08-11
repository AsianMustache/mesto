import { openPopup } from './index.js';

class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        const cardTemplate = document  
        .querySelector('#template-elements').content
        .querySelector('.element')
        .cloneNode(true);
        this._newCard = cardTemplate;
        return cardTemplate;
    }

    _setData() {
        const cardTitle = this._newCard.querySelector('.element__group-title');
        cardTitle.textContent = this._name;
    }

    _handleDeleteElement() {
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        this._card = deleteButton.closest('.element');
        this._card.remove();
        this. card = null;
    }

    _setListeners() {
        const deleteImageButton = this._newCard.querySelector('.element__image-delete');
        deleteImageButton.src = './images/Trash.svg';
        deleteImageButton.alt = 'Кнопка удаления';
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => { this._handleDeleteElement() });
        const cardImage = this._newCard.querySelector('.element__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;
        cardImage.addEventListener('click', () => {
          this._openPopupImage(this._link, this._name);
        })
        const likeButton = this._newCard.querySelector('.element__group-favorite');
        const likeButtonPath = './images/favorite.svg';
        const likeActiveButtonPath = './images/Favorite-active.svg';
        likeButton.src = likeButtonPath;
        likeButton.alt = 'Избранное';
        likeButton.addEventListener('click', () => {
          if (likeButton.getAttribute('src') === likeActiveButtonPath) {
            likeButton.src = likeButtonPath;
          } else {
            likeButton.src = likeActiveButtonPath;
          }
        });
    }

    getCard () {
        this._newCard = this._getTemplate();
        this._setData();
        this._setListeners();
        return this._newCard;
    }

    // _openPopupImage() {
    //     this.imageUrl = this._link;  
    //     this.cardImage = this._newCard.querySelector('.element__image');
    //     this.popupImageForm = this._newCard.querySelector('.popup_form_image');
    //     this.popupImage = this._newCard.querySelector('.popup-image-container__image-fullscreen')
    //     this.popupImage.src = this._link;  
    //     this.popupImage.alt = `Увеличенное изображение - ${this._name}`;
    //     this.popupImageTitle.textContent = this._name;
    //     this.openPopup(this.popupImageForm);
    //     console.log(this._link);
    // }

    _openPopupImage() {
        const imageUrl = this._link;
        const popupImageForm = document.querySelector('.popup_form_image');
        const popupImage = popupImageForm.querySelector('.popup-image-container__image-fullscreen');
        const popupImageTitle = popupImageForm.querySelector('.popup-image-container__title-fullscreen');
        
        popupImage.src = imageUrl;
        popupImage.alt = `Увеличенное изображение - ${this._name}`;
        popupImageTitle.textContent = this._name;
        openPopup(popupImageForm);
    }
}


export default Card;