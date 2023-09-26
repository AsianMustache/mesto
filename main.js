(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}const n=function(){function e(t,n,r,o,i,u){var c=t.name,l=t.link,a=t.id,s=t.likes,f=t.isLiked,p=t.ownerId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=c,this._link=l,this._id=a,this._likes=s,this._isLiked=f,this._templateSelector=n,this._handleCardClick=r,this._handleLikeClick=o,this._currentUserId=u,this._handleDeleteClick=i,this._ownerId=p}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0),t=e.querySelector(".element__delete-button");return this._ownerId!==this._currentUserId&&(t.style.display="none"),e}},{key:"_setData",value:function(){this._cardTitle=this._newCard.querySelector(".element__group-title"),this._cardTitle.textContent=this._name,this._cardImage=this._newCard.querySelector(".element__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._likeButton=this._newCard.querySelector(".element__group-favorite"),this._likesCountElement=this._newCard.querySelector(".element__likes"),this._likesCountElement.textContent=this._likes.length,this._deleteButton=this._newCard.querySelector(".element__delete-button")}},{key:"deleteCard",value:function(){this._card=this._deleteButton.closest(".element"),this._card.remove(),this._card=null}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._link,this._name)}},{key:"_setListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick()})),this._cardImage.addEventListener("click",(function(){e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._isLiked).then((function(t){e._likes=t.likes,e._isLiked=!e._isLiked,e._likesCountElement.textContent=e._likes.length,e._isLiked?e._likeButton.classList.add("element__group-favorite_active"):e._likeButton.classList.remove("element__group-favorite_active")})).catch((function(e){return console.log(e)}))}))}},{key:"getCard",value:function(){return this._newCard=this._getTemplate(),this._setData(),this._setListeners(),this._newCard}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputs=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidValue",value:function(){return this._inputs.some((function(e){return!e.validity.valid||e.validity.typeMismatch}))}},{key:"toggleButtonState",value:function(){this._hasInvalidValue()?(this._buttonElement.classList.add(this._config.disabledButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.disabledButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))})),this.toggleButtonState()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const u=i;var c={};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}const s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}const y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup-close")||t.target===e._popup)&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}const _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup-image-container__image-fullscreen"),t._caption=t._popup.querySelector(".popup-image-container__title-fullscreen"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.title=t,this._caption.textContent=t,h(b(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._handleSubmitForm=t,n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){"info"===t.name?t.value=e.info:t.value=e[t.name],console.log(JSON.stringify(e)),console.log(e)}))}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._handleSubmitForm(n)})),w(E(u.prototype),"setEventListeners",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}const q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._deleteButton=t._popup.querySelector(".popup-container__delete-button"),t}return t=u,(n=[{key:"open",value:function(e){this._submitHandler=e,C(I(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;C(I(u.prototype),"setEventListeners",this).call(this),this._deleteButton.addEventListener("click",(function(){e._submitHandler()})),C(I(u.prototype),"close",this).call(this)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}const B=function(){function e(t){var n=t.nameSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputName=document.querySelector(n),this._inputDescription=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,about:this._about,id:this._id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name=t,this._about=n,this._avatar=r,this._id=o,this._inputName.textContent=t,this._inputDescription.textContent=n}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var A=document.querySelector(".profile__info-edit-button"),D=(document.querySelector(".popup_form_edit").querySelector(".edit-form"),document.querySelector(".profile__add-button")),x=document.querySelector(".popup_form_add"),U=x.querySelector(".add-form"),V=(document.querySelector(".elements"),document.querySelectorAll(".popup-close"),document.getElementById("name-place")),N=document.getElementById("url"),H=document.querySelector('input[name="name"]'),J=document.querySelector('input[name="description"]');function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}const M=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();throw new Error("Error")})).catch((function(e){console.log(e)}))}},{key:"getAllCards",value:function(){return this._sendRequest("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"getApiUserInfo",value:function(){return this._sendRequest("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"editApiProfile",value:function(e,t){return this._sendRequest("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"addNewCardApi",value:function(e,t){return this._sendRequest("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"changeLikeStatus",value:function(e,t){var n=t?"DELETE":"PUT",r="".concat(this._url,"/cards/").concat(e,"/likes");return fetch(r,{method:n,headers:this._headers}).then((function(e){return e.json()}))}},{key:"deleteCardApi",value:function(e){return this._sendRequest("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var z,K=new _(".popup_form_image"),Q=new B({nameSelector:".profile__info-name",infoSelector:".profile__info-description"}),W=new q(".popup_form_delete"),X=new s({items:[],renderer:te},".elements"),Y=new O(".popup_form_edit",(function(e){var t=e.name,n=e.description;ee.editApiProfile(t,n).then((function(e){Q.setUserInfo(e),Y.close()})).catch((function(e){console.log(e)}))})),Z=new O(".popup_form_add",(function(e){})),$=document.getElementById("profile-avatar"),ee=new M({url:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"83dc9433-9b9b-4fa6-92f5-5a62f5b1db23","Content-Type":"application/json"}});function te(e){var t=e.name,r=e.link,o=e.id,i=e.likes,u=e.isLiked,c=e.ownerId,l=new n({name:t,link:r,id:o,likes:i,isLiked:u,ownerId:c},"#template-elements",ne,(function(e){return ee.changeLikeStatus(o,e)}),(function(){return W.open((function(){ee.deleteCardApi(o).then((function(){l.deleteCard(),W.close()})).catch((function(e){console.log(e)}))}))}),Q.getUserInfo().id);return l.getCard()}function ne(e,t){K.open(e,t)}ee.getApiUserInfo().then((function(e){Q.setUserInfo(e);var t="url(".concat(e.avatar,")");$.style.backgroundImage=t})).then((function(){return ee.getAllCards()})).then((function(e){var t=Q.getUserInfo().id;e.reverse().forEach((function(e){var n=e.likes.some((function(e){return e._id===t})),r=te({name:e.name,link:e.link,id:e._id,likes:e.likes,isLiked:n,ownerId:e.owner._id});X.addItem(r)})),X.renderItems()})).catch((function(e){console.log(e)})),A.addEventListener("click",(function(){var e=Q.getUserInfo();H.value=e.name,J.value=e.about,Y.open()})),D.addEventListener("click",(function(){Z.open(),U.reset(),c[U.getAttribute("name")].toggleButtonState()})),K.setEventListeners(),Y.setEventListeners(),Z.setEventListeners(),W.setEventListeners(),x.addEventListener("submit",(function(e){e.preventDefault();var t=V.value,n=N.value;ee.addNewCardApi(t,n).then((function(e){var t=te({name:e.name,link:e.link,id:e._id,likes:e.likes,isLiked:!1,ownerId:e.owner._id});X.addItem(t),Z.close()})).catch((function(e){console.log(e)}))})),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",disabledButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new u(z,e);t.enableValidation(),c[e.getAttribute("name")]=t}))})();