class Card {
    constructor({ name, link }, templateSelector, handleCardClick, api) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._api = api;
    //   this._likesCountElement = this._element.querySelector('.element__likes');
  }
    // constructor({ name, link, likes, _id }, templateSelector, likeButton, handleCardClick, handleLikeClick ) {
    //     this._name = name;
    //     this._link = link;
    //     this._likes = likes;
    //     this._id = _id;
    //     this._isLiked = false;
    //     this._likeButton = likeButton;
    //     this._templateSelector = templateSelector;
    //     this._handleCardClick = handleCardClick;
    //     this._handleLikeClick = handleLikeClick;
    // }

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
        this._likeButton = this._newCard.querySelector('.element__group-favorite');
        // this._deleteCardButton = this._newCard.querySelector('.popup-container__delete-button');
        this._likesCountElement = this._newCard.querySelector('.element__likes');
        this._deleteButton = this._newCard.querySelector('.element__delete-button');
    }

    _deletePopupCard() {
        this._form = document.querySelector('.popup_form_delete');
        this._form.classList.add('popup_opened');
      }

    _deleteCard() {
        this._card = this._deleteButton.closest('.element');
        this._card.remove();
        this._card = null;
    }

    _handleLike = () => {
        const isLiked = this._likeButton.classList.contains('element__group-favorite_active');
        this._api.changeLikeStatus(this._cardId, !isLiked);
    }

    // _toggleLike(){
    //     this._likeButton.classList.toggle('element__group-favorite_active');
    // }

    _handleImageClick() {
        this._handleCardClick(this._link, this._name);
    }

    _setListeners() {
        // this._deleteCardButton.addEventListener('click', () => { this._deleteCard() });
        this._deleteButton.addEventListener('click', () => { this._deletePopupCard() });
        this._cardImage.addEventListener('click', () => { this._handleImageClick() });
        // this._likeButton.addEventListener('click', () => { this._toggleLike() });
        // this._likeButton.addEventListener('click', () => { this._toggleLike() });
        this._likeButton.addEventListener('click', this._handleLike.bind(this));
    }

    updateLikes(updatedLikes) {
        this._likes = updatedLikes;
        // this._likesCountElement = this._element.querySelector('.element__likes');
        this._likesCountElement.textContent = this._likes.length.toString();
    }
    
      toggleLike() {
        this._toggleLike();
      }

    getCard() {
        this._newCard = this._getTemplate();
        // this._likesCountElement.textContent = this._likes.length;
        this._setData();
        this._setListeners();
        // this.updateLikesCount(this._likes.length);
        return this._newCard;
    }
}


export default Card;