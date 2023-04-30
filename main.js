(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var r,n;return r=e,(n=[{key:"_isResOk",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._isResOk(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._isResOk(t)}))}},{key:"patchProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._isResOk(e)}))}},{key:"postCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._isResOk(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._isRestOk(e)}))}},{key:"likeCard",value:function(e,t){var r=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return r._isResOk(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._isResOk(e)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._options=t}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.add(this._options.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._options.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._options.inputErrorClass),this._errorElement.classList.remove(this._options.errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._options.inputSelector)),this._submitButton=this._form.querySelector(this._options.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"toggleButtonState",value:function(){var e=this._form.checkValidity();this._submitButton.disabled=!e,this._submitButton.classList.toggle(this._options.inactiveButtonClass,!e)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderCards",value:function(){this._renderedItems.forEach(this._renderer)}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__heading").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__delete-icon").addEventListener("click",this._deleteCard),this._element.querySelector(".element__like-icon").addEventListener("click",this._toggleLike),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_deleteCard",value:function(e){e.target.closest(".element").remove()}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("element__like-icon_active")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCapture=t._popup.querySelector(".popup__image-capture"),t}return t=u,(r=[{key:"open",value:function(e){var t=e.image,r=e.alt,n=e.text;v(_(u.prototype),"open",this).call(this),this._image=t,this._alt=r,this._text=n,this._popupImage.src=this._image,this._popupImage.alt=this._alt,this._popupImageCapture.textContent=this._text}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.handleFormSubmit,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__form-item"),t._submitBtn=t._form.querySelector(".popup__submit-btn"),t._submitBtnText=t._submitBtn.textContent,t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;w(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){w(j(u.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e,t){e?(this._submitBtnText=t,this._submitBtn.disabled=!0):(this._submitBtnText=t,this._submitBtn.disabled=!1)}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var q=function(){function e(t){var r=t.userNameSelector,n=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._id=e._id}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar,this._userAvatar.alt=e.name}},{key:"getUserId",value:function(){return this._id}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=(document.querySelector(".popup__form-item_input_name"),document.querySelector(".popup__form-item_input_job"),document.querySelector(".profile__edit-btn")),T=document.querySelector(".profile__add-btn"),x=document.querySelector(".profile__avatar-edit-btn"),R=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector("#name-input")),I=document.querySelector("#description-input"),B=(document.querySelector(".popup__form-item_input_place"),document.querySelector(".popup__form-item_input_link"),document.querySelector("#popup-edit"),document.querySelector("#popup-new-place"),document.querySelector(".popup__image"),document.querySelector(".popup__image-capture"),document.querySelector("#popup-image-scaler"),document.querySelector(".popup__submit-btn"),document.querySelector("#popup-edit-form"),document.querySelector("#popup-new-place-form"),document.querySelectorAll(".popup__close-icon"),document.querySelector(".popup"),new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"c1a078e3-d64c-4d67-b98e-d25e1a2a1b3f","Content-Type":"application/json"}})),A=new q({userNameSelector:".profile__name",userJobSelector:".profile__description",userAvatarSelector:".profile__avatar"}),U=new O({handleFormSubmit:function(e){U.loading(!0,"Сохраняем..."),B.patchProfile(e).then((function(e){A.setUserInfo(e),U.close()})).catch((function(e){return console.log(e)})).finally((function(){return U.loading(!1,"Сохранить")}))},popupSelector:"#popup-edit"}),V=new O({handleFormSubmit:function(e){V.loading(!0,"Сохранение..."),B.setAvatar(e).then((function(e){A.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){return V.loading(!1,"Сохранить")}))},popupSelector:"#popup-avatar-change"}),N=new O({handleFormSubmit:function(e){F(e)},popupSelector:"#popup-new-place"}),J=new S("#popup-image-scaler");function D(e,t){J.open({image:t,alt:e,text:e})}function F(e){var t=new p(e,"#elements-template",D);return H.addItem(t.generateCard())}var z,H=new c({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){F(e)}},".elements"),M={};L.addEventListener("click",(function(){U.open();var e=A.getUserInfo();R.value=e.name,I.value=e.about})),T.addEventListener("click",(function(){N.open(),M["popup-new-place"].toggleButtonState()})),x.addEventListener("click",(function(){V.open(),M["popup-avatar"].toggleButtonState()})),U.setEventListeners(),V.setEventListeners(),N.setEventListeners(),J.setEventListeners(),H.renderCards(),z={formSelector:".popup__form",inputSelector:".popup__form-item",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__form-item_input_type-error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new i(z,e),r=e.getAttribute("name");M[r]=t,t.enableValidation()}))})();