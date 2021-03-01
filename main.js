(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t){var n=t.options,o=t.ownerId,r=t.myId,i=t.cardTemplate,a=t.imgPopupCallback,c=t.deletePopup,u=t.addLikeCallback,s=t.removeLikeCallback;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=n,this._name=n.name,this._link=n.link,this._itemId=n._id,this._ownerId=o,this._cardTemplate=i,this._imgPopupCallback=a,this._deletePopup=c,this._myId=r,this._addLike=u,this._removeLike=s}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._delete.addEventListener("click",(function(e){e.stopPropagation(),t._deletePopup(t)})),this._like.addEventListener("click",(function(e){e.stopPropagation(),t._handleLike()})),this._img.addEventListener("click",(function(e){t._handleCardClick()}))}},{key:"_setDeleteButton",value:function(){this._ownerId!==this._myId&&this._delete.remove()}},{key:"_handleLike",value:function(){var t=this;this.data.likes.some((function(e){return e._id===t._myId}))?this._removeLike(this):this._addLike(this)}},{key:"setLikeState",value:function(t){var e=this;this.data=t,this.data.likes.some((function(t){return t._id===e._myId}))?this._like.classList.add("is-active"):this._like.classList.remove("is-active"),this._likeCounter.textContent=this.data.likes.length}},{key:"handleDelete",value:function(){this._element.remove()}},{key:"_handleCardClick",value:function(t){this._imgPopupCallback()}},{key:"generateCard",value:function(){var t=this._getTemplate();return this._element=t.querySelector(".element"),this._delete=t.querySelector(".btn_type_delete"),this._like=t.querySelector(".btn_type_like"),this._img=t.querySelector(".element__img"),this._likeCounter=t.querySelector(".element__like-counter"),this._subtitle=t.querySelector(".element__subtitle"),this._setEventListeners(),this._setDeleteButton(),this._img.src=this._link,this._img.alt=this._name,this._subtitle.textContent=this._name,this.setLikeState(this._data),t}}])&&t(n.prototype,o),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,o;return e=t,(o=[{key:"open",value:function(){this._popup.classList.remove("popup_hidden"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.add("popup_hidden"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".btn_type_close").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&n(e.prototype,o),t}();function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var e,n,o,r,l=(o=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(o);if(r){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function f(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this,t))._callBack=e,n._form=n._popup.querySelector(".popup__container"),n._inputs=n._form.querySelectorAll(".popup__input"),n.setEventListeners(),n}return e=f,(n=[{key:"open",value:function(t){this._data=t,a(s(f.prototype),"open",this).call(this)}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"close",value:function(){a(s(f.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;a(s(f.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callBack(t._getInputValues(),t._data)}))}}])&&i(e.prototype,n),f}(o);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(o);if(r){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._img=e._popup.querySelector(".popup-img__background-img"),e._desc=e._popup.querySelector(".popup-img__subtitle"),e.setEventListeners(),e}return e=a,(n=[{key:"open",value:function(t,e){p(y(a.prototype),"open",this).call(this),this._img.src=t,this._desc.textContent=e}}])&&h(e.prototype,n),a}(o);function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var b=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e.renderer,this._items=e.items}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&v(e.prototype,n),t}();function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.name),this._desc=document.querySelector(e.desc),this._avatar=document.querySelector(".profile__avatar")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._name.textContent,t.desc=this._desc.textContent,t.avatar=this._avatar.src,t}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._desc.textContent=t.about,this._avatar.src=t.avatar}}])&&k(e.prototype,n),t}();function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector),this._inputElements=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),n.validator=this}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this.toggleButtonState(),this._inputElements.forEach((function(e){e.addEventListener("input",(function(){t._validateInput(e)}))})),this._formElement.addEventListener("reset",(function(){t._inputElements.forEach((function(e){e.value="",t._hideError(e)})),t.toggleButtonState()})),this._formElement.addEventListener("submit",(function(t){t.preventDefault()}))}},{key:"_showError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));e.classList.add(this._config.errorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)):(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(t){return this._inputElements.some((function(t){return!t.validity.valid}))}},{key:"_validateInput",value:function(t){t.validity.valid?this._hideError(t):this._showError(t),this.toggleButtonState()}}])&&E(e.prototype,n),t}();function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._autorization=this._options.authorization,this._url=this._options.baseUrl,this._cohort=this._options.cohort}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url).concat(this._cohort,"users/me"),{headers:{authorization:this._autorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"users/me"),{method:"PATCH",headers:{authorization:this._autorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.desc})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"users/me/avatar/"),{method:"PATCH",headers:{authorization:this._autorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(t.link)})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url).concat(this._cohort,"cards"),{headers:{authorization:this._autorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"addCard",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"cards"),{method:"POST",headers:{authorization:this._autorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.subtitle,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._autorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._autorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"addLike",value:function(t){return fetch("".concat(this._url).concat(this._cohort,"cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._autorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}}])&&w(e.prototype,n),t}(),j=document.querySelector(".js-profile-submit"),L=document.querySelector(".js-place-submit"),P=document.querySelector(".js-avatar-submit"),I={authorization:"fd8146ec-08ee-4ae1-b040-cf6a41d6c968",baseUrl:"https://mesto.nomoreparties.co/v1/",cohort:"cohort-20/"},O=new C(I),q=new g({name:".profile__title",desc:".profile__subtitle"});function T(t,e){e.textContent=t?"Сохранение..":"Сохранить"}var z=new m(".js-popup-img"),B=new l(".js-popup-profile",(function(t){T(!0,j),O.setUserInfo(t).then((function(t){q.setUserInfo(t),B.close()})).finally((function(t){T(!1,j)}))})),R=new l(".js-popup-place",(function(t){T(!0,L),O.addCard(t).then((function(t){F(t,t.owner._id,I.myId),R.close()})).finally((function(t){T(!1,L)}))})),x=new l(".js-popup-avatar",(function(t){T(!0,P),O.updateAvatar(t).then((function(t){P.textContent="Сохранить",q.setUserInfo(t),x.close()})).finally((function(t){T(!1,P)}))})),D=document.querySelector(".elements"),U=document.querySelector(".btn_type_pencil"),A=document.querySelector(".btn_type_add"),N=document.querySelector(".popup__input_type_name"),V=document.querySelector(".popup__input_type_desc"),J=document.querySelectorAll(".popup__container"),H=document.querySelector(".profile__avatar");A.addEventListener("click",(function(){return R.open()})),H.addEventListener("click",(function(){return x.open()})),U.addEventListener("click",(function(){var t=q.getUserInfo();N.value=t.name,V.value=t.desc,B.open()}));var M=new l(".js-popup-delete",(function(t,e){O.deleteCard(e._itemId).then((function(t){M.close(),e.handleDelete()}))}));function F(t,n,o,r){var i=new e({options:t,ownerId:n,myId:o,cardTemplate:"#card-template",imgPopupCallback:function(){return z.open(t.link,t.name)},deletePopup:function(t){return M.open(t)},addLikeCallback:function(t){return function(t){return O.addLike(t._itemId).then((function(e){return t.setLikeState(e),e}))}(t)},removeLikeCallback:function(t){return function(t){return O.removeLike(t._itemId).then((function(e){return t.setLikeState(e),e}))}(t)}}).generateCard();D.prepend(i)}O.getInitialCards().then((function(t){new b({items:t,renderer:function(t){F(t,t.owner._id,I.myId,t._id)}},"#card-template").renderItems()})),O.getUserInfo().then((function(t){q.setUserInfo(t),I.myId=t._id}));var G={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".btn_type_text",inactiveButtonClass:"btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup-error"};J.forEach((function(t){new S(G,t).enableValidation()}))})();