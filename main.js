(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n){var o=n.hasMyUserId,i=n.handleCardClick,a=n.handleDelBtnClick,u=n.handleLikeBtnClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._templateSelector=r,this._hasMyUserId=o,this._handleCardClick=i,this._handleDelBtnClick=a,this._handleLikeBtnClick=u}var r,n;return r=t,(n=[{key:"createCard",value:function(){var t=this._hasMyUserId([this._data.owner]);return this._cardElem=this._createCardElement(),this._delBtnElem=this._cardElem.querySelector(".card__del-button"),this._cardImageElem=this._cardElem.querySelector(".card__image"),this._likeBtnElem=this._cardElem.querySelector(".card__like-button"),this._likeNumberElem=this._cardElem.querySelector(".card__like-number"),t&&this._delBtnElem.classList.remove("card__del-button_hidden"),this._cardImageElem.src=this._data.link,this._cardImageElem.alt=this._data.name,this._cardElem.querySelector(".card__title").textContent=this._data.name,this._showLikes(this._data),this._setListenersOnCard(),this._cardElem}},{key:"_createCardElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card__item").cloneNode(!0)}},{key:"_setListenersOnCard",value:function(){var t=this;this._delBtnElem.addEventListener("click",(function(){t._handleDelBtnClick(t._data._id,t._deleteCard.bind(t))})),this._cardImageElem.addEventListener("click",(function(){t._handleCardClick(t._data.link,t._data.name)})),this._likeBtnElem.addEventListener("click",(function(){t._handleLikeBtnClick(t._data,t._isMyLike,t._showLikes.bind(t))}))}},{key:"_deleteCard",value:function(){this._cardElem.remove()}},{key:"_showLikes",value:function(t){this._isMyLike=this._hasMyUserId(t.likes),this._isMyLike?this._likeBtnElem.classList.add("card__like-button_active"):this._likeBtnElem.classList.contains("card__like-button_active")&&this._likeBtnElem.classList.remove("card__like-button_active"),t.likes.length>0?this._likeNumberElem.textContent=t.likes.length:this._likeNumberElem.textContent=null}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._params=e}var e,r;return e=t,(r=[{key:"createQueueFetch",value:function(){return Promise.all([this.getInitialProfile(),this.getInitialCards()])}},{key:"getInitialProfile",value:function(){var t="".concat(this._baseUrl,"/users/me");return this._createFetch(t,"GET")}},{key:"updateAvatar",value:function(t){var e="".concat(this._baseUrl,"/users/me/avatar");return this._createFetch(e,"PATCH",t)}},{key:"updateUserInfo",value:function(t){var e="".concat(this._baseUrl,"/users/me");return this._createFetch(e,"PATCH",t)}},{key:"getInitialCards",value:function(){var t="".concat(this._baseUrl,"/cards");return this._createFetch(t,"GET")}},{key:"addNewCard",value:function(t){var e="".concat(this._baseUrl,"/cards");return this._createFetch(e,"POST",t)}},{key:"deleteCard",value:function(t,e){var r="".concat(this._baseUrl,"/cards/").concat(t);return this._createFetch(r,"DELETE")}},{key:"toggleLike",value:function(t,e,r){var n="".concat(this._baseUrl,"/cards/").concat(t._id,"/likes"),o=e?"DELETE":"PUT";this._createFetch(n,o).then((function(t){r(t)})).catch((function(t){console.log(t)}))}},{key:"_createFetch",value:function(t,e,r){return fetch(t,{method:e,headers:this._headers,body:r?JSON.stringify(r):r}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"hideFormValidationErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"setInactiveButtonState",value:function(){this._buttonSubmitElement.classList.add(this._inactiveButtonClass),this._buttonSubmitElement.disabled=!0}},{key:"_setEventListeners",value:function(){var t,e=this;this._inputList=function(t){if(Array.isArray(t))return u(t)}(t=this._formElement.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonSubmitElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonSubmitState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonSubmitState()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var r=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),r.classList.add(this._errorClass),r.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_toggleButtonSubmitState",value:function(){this._hasInvalidInputs()?this.setInactiveButtonState():this._setActiveButtonState()}},{key:"_hasInvalidInputs",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setActiveButtonState",value:function(){this._buttonSubmitElement.classList.remove(this._inactiveButtonClass),this._buttonSubmitElement.disabled=!1}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var y=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=p(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupElement=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupElement.querySelector(".popup__close").addEventListener("click",this.close.bind(this)),this._popupElement.addEventListener("click",this._handleOverlayClickClose.bind(this))}},{key:"_handleOverlayClickClose",value:function(t){t.target===t.currentTarget&&this.close()}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=h(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function _(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return _(this,t)});function a(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleFormSubmit=e,r.formElement=r._popupElement.querySelector(".form"),r._inputList=r._popupElement.querySelectorAll(".form__input"),r._buttonSubmitElement=r._popupElement.querySelector(".form__submit"),r}return e=a,r=[{key:"setEventListeners",value:function(){var t=this;d(S(a.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setButtonSubmitState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(this._buttonSubmitElement.textContent="Сохранение...",this._buttonSubmitElement.disabled=!0):(this._buttonSubmitElement.textContent="Сохранить",this._buttonSubmitElement.disabled=!1)}},{key:"close",value:function(){d(S(a.prototype),"close",this).call(this),this.formElement.reset()}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value.trim()})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t[e.name]&&(e.value=t[e.name])}))}}],r&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=O(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function C(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return C(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._zoomPictureImg=e._popupElement.querySelector(".zoom-picture__image"),e._zoomPictureCaption=e._popupElement.querySelector(".zoom-picture__caption"),e}return e=a,(r=[{key:"open",value:function(t,e){k(P(a.prototype),"open",this).call(this),this._zoomPictureImg.src=t,this._zoomPictureImg.alt=e,this._zoomPictureCaption.textContent=e}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=q(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function U(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(n);if(o){var r=A(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return U(this,t)});function a(t,e){var r,n=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleFormSubmit=n,r.formElement=r._popupElement.querySelector(".form"),r}return e=a,(r=[{key:"open",value:function(t,e){T(A(a.prototype),"open",this).call(this),this._cardId=t,this._deleteCard=e}},{key:"setEventListeners",value:function(){var t=this;T(A(a.prototype),"setEventListeners",this).call(this),this.formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._cardId,t._deleteCard)}))}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var V=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){this.renderedItems.reverse().forEach(this._renderer)}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,N(n.key),n)}}function N(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}var G=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){i.name=t.name,i.about=t.about,i.avatar=t.avatar,i.id=t._id,i._nameElem.textContent=t.name,i._aboutElem.textContent=t.about,i._avatarElem.src=i.avatar},(n=N(n="setUserInfo"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._nameElem=document.querySelector(e.userName),this._aboutElem=document.querySelector(e.userAbout),this._avatarElem=document.querySelector(e.userAvatar)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameElem.textContent,about:this._aboutElem.textContent}}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),H={inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Q=document.querySelector(".profile"),$=Q.querySelector(".profile__edit-button"),J=Q.querySelector(".profile__add-button"),K=Q.querySelector(".profile__user-avatar");function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var X=new i({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"4f5c1ea4-b5a2-4f77-88d2-569b5dbe0c66","Content-Type":"application/json"}}),Y=new E(".popup_type_update-avatar",(function(t){Y.setButtonSubmitState(),X.updateAvatar(t).then((function(t){nt.setUserInfo(t),Y.close(),it.setInactiveButtonState()})).catch((function(t){console.log(t)})).finally((function(){Y.setButtonSubmitState(!1)}))}));Y.setEventListeners();var Z=new E(".popup_type_profile",(function(t){Z.setButtonSubmitState(),X.updateUserInfo(t).then((function(t){nt.setUserInfo(t),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.setButtonSubmitState(!1)}))}));Z.setEventListeners();var tt=new E(".popup_type_card",(function(t){tt.setButtonSubmitState(),X.addNewCard(t).then((function(t){lt(t),tt.close(),ut.setInactiveButtonState()})).catch((function(t){console.log(t)})).finally((function(){tt.setButtonSubmitState(!1)}))}));tt.setEventListeners();var et=new L(".popup_type_zoom-picture");et.setEventListeners();var rt=new F(".popup_type_del-card",{handleFormSubmit:function(t,e){X.deleteCard.call(X,t).then((function(){e(),rt.close()})).catch((function(t){console.log(t)}))}});rt.setEventListeners();var nt=new G({userName:".profile__user-name",userAbout:".profile__user-about",userAvatar:".profile__user-avatar"}),ot=new V({renderer:lt},".cards__list");X.createQueueFetch().then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];nt.setUserInfo(o),ot.renderedItems=i,ot.renderItems()})).catch((function(t){console.log(t)}));var it=new c(H,Y.formElement),at=new c(H,Z.formElement),ut=new c(H,tt.formElement);function lt(t){var e=new r(t,".card-template",{hasMyUserId:function(t){return t.some((function(t){return t._id===nt.id}))},handleCardClick:et.open.bind(et),handleDelBtnClick:rt.open.bind(rt),handleLikeBtnClick:X.toggleLike.bind(X)});ot.addItem(e.createCard())}it.enableValidation(),at.enableValidation(),ut.enableValidation(),K.addEventListener("click",(function(){it.hideFormValidationErrors(),Y.open()})),$.addEventListener("click",(function(){at.hideFormValidationErrors(),Z.setInputValues(nt.getUserInfo()),Z.open()})),J.addEventListener("click",(function(){ut.hideFormValidationErrors(),tt.open()}))})();
//# sourceMappingURL=main.js.map