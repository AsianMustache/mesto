import { openPopupImage } from "../index.js"

class Card {
    constructor({ name, link }, templateSelector, handleCardClick) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
  }

    _getTemplate() {
        const cardTemplate = document  
        .querySelector(this._templateSelector).content
        .querySelector('.element')
        .cloneNode(true);
        return cardTemplate;
    }

    _setData() {
        const cardTitle = this._newCard.querySelector('.element__group-title');
        cardTitle.textContent = this._name;
    }

    _deleteCard() {
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        this._card = deleteButton.closest('.element');
        this._card.remove();
        this._card = null;
    }

    _handleImageClick() {
      const cardImage = this._newCard.querySelector('.element__image');
      cardImage.src = this._link;
      cardImage.alt = this._name;
      cardImage.addEventListener('click', () => {
        openPopupImage(this._link, this._name);
        // this._handleCardClick(this._link, this._name);
    });
    }

    _toggleLike(){
        const likeButton = this._newCard.querySelector('.element__group-favorite');
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('element__group-favorite_active');
        });
    }

    _setListeners() {
        const deleteImageButton = this._newCard.querySelector('.element__image-delete');
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => { this._deleteCard() });
        
    }

    getCard() {
        this._newCard = this._getTemplate();
        this._setData();
        this._setListeners();
        this._handleImageClick();
        this._toggleLike();
        return this._newCard;
    }
}


export default Card;