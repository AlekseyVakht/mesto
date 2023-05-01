(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var r,n;return r=e,(n=[{key:"_isResOk",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfoApi",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._isResOk(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._isResOk(t)}))}},{key:"patchProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._isResOk(e)}))}},{key:"postCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._isResOk(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._isResOk(e)}))}},{key:"likeCard",value:function(e,t){var r=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return r._isResOk(e)}))}},{key:"deleteCardApi",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._isResOk(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._isResOk(e)}))}},{key:"removeCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._isResOk(e)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._options=t}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.add(this._options.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._options.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._options.inputErrorClass),this._errorElement.classList.remove(this._options.errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._options.inputSelector)),this._submitButton=this._form.querySelector(this._options.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"toggleButtonState",value:function(){var e=this._form.checkValidity();this._submitButton.disabled=!e,this._submitButton.classList.toggle(this._options.inactiveButtonClass,!e)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t,r){var n=t.data,o=t.userId,i=t.handleCardClick,u=t.handleCardDelete,a=t.handleCardLike,c=t.handleCardLikeRemove;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=n,this._name=n.name,this._link=n.link,this._likes=n.likes,this._id=n._id,this._userId=o,this._owner=n.owner,this._userIdCard=n.owner._id,this._templateSelector=r,this._handleCardClick=i,this._handleCardDelete=u,this._handleCardLike=a,this._handleCardLikeRemove=c}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteIcon=this._element.querySelector(".element__delete-icon"),this._likeIcon=this._element.querySelector(".element__like-icon"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._cardImage=this._element.querySelector(".element__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__heading").textContent=this._name,this.showLikes(this.data),this._userIdCard!==this._userId&&this._deleteIcon.remove(),this._setEventListeners(),this._element}},{key:"getId",value:function(){return this._id}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"cardLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"showLikes",value:function(e){this._likes=e.likes,0===this._likes.length?this._likeCounter.textContent="":this._likeCounter.textContent=this._likes.length,this.cardLike()?this._likeIcon.classList.add("card__button_active"):this._likeIcon.classList.remove("card__button_active")}},{key:"_changeLikeState",value:function(){this._likeIcon.classList.contains("element__like-icon_active")?this._handleCardLikeRemove(this._id):this._handleCardLike(this._id)}},{key:"_setEventListeners",value:function(){var e=this;this._deleteIcon.addEventListener("click",(function(){e._handleCardDelete()})),this._likeIcon.addEventListener("click",(function(){e._changeLikeState()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},_.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCapture=t._popup.querySelector(".popup__image-capture"),t}return t=u,(r=[{key:"open",value:function(e){var t=e.image,r=e.alt,n=e.text;_(b(u.prototype),"open",this).call(this),this._image=t,this._alt=r,this._text=n,this._popupImage.src=this._image,this._popupImage.alt=this._alt,this._popupImageCapture.textContent=this._text}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(o){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.handleFormSubmit,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__form-item"),t._submitBtn=t._popup.querySelector(".popup__submit-btn"),t._submitBtnText=t._submitBtn.textContent,t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;w(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.loading(!0,"Сохраняем..."),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){w(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e){this._submitBtn.textContent=e?"Сохраняем...":this._submitBtnText}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._submitBtn=t._popup.querySelector(".popup__submit-btn"),t._submitBtnText=t._submitBtn.textContent,t}return t=u,(r=[{key:"setSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;L(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(),e.close()}))}},{key:"loading",value:function(e){this._submitBtn.textContent=e?"Удаляем...":this._submitBtnText}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var A=function(){function e(t){var r=t.userNameSelector,n=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._id=e._id}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar,this._userAvatar.alt=e.name}},{key:"getUserId",value:function(){return this._id}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=(document.querySelector(".popup__form-item_input_name"),document.querySelector(".popup__form-item_input_job"),document.querySelector(".profile__edit-btn")),U=document.querySelector(".profile__add-btn"),D=document.querySelector(".profile__avatar-edit-btn"),V=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector("#name-input")),N=document.querySelector("#description-input");function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector(".popup__form-item_input_place"),document.querySelector(".popup__form-item_input_link"),document.querySelector("#popup-edit"),document.querySelector("#popup-new-place"),document.querySelector(".popup__image"),document.querySelector(".popup__image-capture"),document.querySelector("#popup-image-scaler"),document.querySelector(".popup__submit-btn"),document.querySelector("#popup-edit-form"),document.querySelector("#popup-new-place-form"),document.querySelectorAll(".popup__close-icon"),document.querySelector(".popup");var F=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"c1a078e3-d64c-4d67-b98e-d25e1a2a1b3f","Content-Type":"application/json"}});Promise.all([F.getCards()]).then((function(e){var t,r,n=(t=e,r=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];Y.renderCards(n)})).catch((function(e){console.log(e)}));var H=new A({userNameSelector:".profile__name",userJobSelector:".profile__description",userAvatarSelector:".profile__avatar"}),M=new R("#popup-with-confirm"),z=new C({handleFormSubmit:function(e){z.loading(!0),F.patchProfile(e).then((function(e){H.setUserInfo(e),z.close()})).catch((function(e){return console.log(e)})).finally((function(){z.loading(!1)}))},popupSelector:"#popup-edit"}),$=new C({handleFormSubmit:function(e){$.loading(!0),F.setAvatar(e).then((function(e){H.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){$.loading(!1)}))},popupSelector:"#popup-avatar-change"}),G=new C({handleFormSubmit:function(e){G.loading(!0),F.postCard(e).then((function(e){W(e)})).catch((function(e){return console.log(e)})).finally((function(){G.loading(!1)}))},popupSelector:"#popup-new-place"}),K=new S("#popup-image-scaler");function Q(e,t){K.open({image:t,alt:e,text:e})}function W(e){var t=new f({data:e,userId:H.getUserId(),handleCardClick:Q,handleCardDelete:function(){M.open(),M.setSubmit((function(){F.deleteCardApi(t.getId()).then((function(){t.deleteCard(),M.close()})).catch((function(e){console.log(e)})).finally((function(){M.loading(!1,"Да")}))}))},handleCardLike:function(){F.addCardLike(t.getId()).then((function(e){t.cardLiked(e)})).catch((function(e){console.log(e)}))},handleCardLikeRemove:function(){F.removeCardLike(t.getId()).then((function(e){t.cardLiked(e)})).catch((function(e){console.log(e)}))}},"#elements-template");return Y.addItem(t.generateCard())}var X,Y=new c({renderer:function(e){W(e)}},".elements"),Z={};B.addEventListener("click",(function(){z.open();var e=H.getUserInfo();V.value=e.name,N.value=e.about})),U.addEventListener("click",(function(){G.open(),Z["popup-new-place"].toggleButtonState()})),D.addEventListener("click",(function(){$.open(),Z["popup-avatar"].toggleButtonState()})),M.setEventListeners(),z.setEventListeners(),$.setEventListeners(),G.setEventListeners(),K.setEventListeners(),X={formSelector:".popup__form",inputSelector:".popup__form-item",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__form-item_input_type-error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(X.formSelector)).forEach((function(e){var t=new i(X,e),r=e.getAttribute("name");Z[r]=t,t.enableValidation()}))})();