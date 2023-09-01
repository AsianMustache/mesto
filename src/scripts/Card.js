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
        this._cardTitle = this._newCard.querySelector('.element__group-title');
        this._cardTitle.textContent = this._name;
        this._cardImage = this._newCard.querySelector('.element__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        
    }

    _deleteCard() {
        // this._deleteButton = this._newCard.querySelector('.element__delete-button');
        this._card = this._deleteButton.closest('.element');
        this._card.remove();
        this._card = null;
    }

    _toggleLike(){
        this._likeButton = this._newCard.querySelector('.element__group-favorite');
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('element__group-favorite_active'); 
        })
        
    }

    _setListeners() {
        const deleteImageButton = this._newCard.querySelector('.element__image-delete');
        this._deleteButton.addEventListener('click', () => { this._deleteCard() });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        });
    }

    getCard() {
        this._newCard = this._getTemplate();
        this._deleteButton = this._newCard.querySelector('.element__delete-button');
        this._setData();
        this._setListeners();
        this._toggleLike();
        return this._newCard;
    }
}

export default Card;