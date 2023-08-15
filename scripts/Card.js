import { openPopupImage } from "./index.js"

class Card {
    constructor({ name, link }, templateSelector) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
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

    _handleDeleteElement() {
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        this._card = deleteButton.closest('.element');
        this._card.remove();
        this._card = null;
    }

    _setOpenFullImagePopupEventListener() {
      const cardImage = this._newCard.querySelector('.element__image');
      cardImage.src = this._link;
      cardImage.alt = this._name;
      cardImage.addEventListener('click', () => {
          openPopupImage(cardImage.src, cardImage.alt);
      });
    }

    _setListeners() {
        const deleteImageButton = this._newCard.querySelector('.element__image-delete');
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => { this._handleDeleteElement() });
        const likeButton = this._newCard.querySelector('.element__group-favorite');
        const likeButtonPath = './images/favorite.svg';
        const likeActiveButtonPath = './images/Favorite-active.svg';
        likeButton.src = likeButtonPath;
        likeButton.addEventListener('click', () => {
          likeButton.src = likeButton.getAttribute('src') === likeActiveButtonPath ? likeButtonPath : likeActiveButtonPath;
        });
    }

    getCard() {
        this._newCard = this._getTemplate();
        this._setData();
        this._setListeners();
        this._setOpenFullImagePopupEventListener();
        return this._newCard;
    }
}


export default Card;