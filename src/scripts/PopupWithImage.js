import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-image-container__image-fullscreen');
        this._caption = this._popup.querySelector('.popup-image-container__title-fullscreen');
    }

    open(imageSrc, caption) {
        this._image.src = imageSrc;
        this._image.title = caption;
        this._caption.textContent = caption;
        super.open();
    }
}

export default PopupWithImage;