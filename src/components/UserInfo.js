
export default class UserInfo {
  constructor (data) {
    this._name = document.querySelector(data.name);
    this._desc = document.querySelector(data.desc);
    this._avatar = document.querySelector('.profile__avatar');
  }

  getUserInfo () {
    const obj = {};
    obj.name = this._name.textContent;
    obj.desc = this._desc.textContent;
    obj.avatar = this._avatar.src;
    return obj;
  }

  setUserInfo (info) {
    this._name.textContent = info.name;
    this._desc.textContent = info.about;
    this._avatar.src = info.avatar;
  }
}
