
export default class UserInfo {
  constructor (data) {
    this._name = document.querySelector(data.name);
    this._desc = document.querySelector(data.desc);
  }

  getUserInfo () {
    const obj = {};
    obj.name = this._name.textContent;
    obj.desc = this._desc.textContent;
    return obj;
  }

  setUserInfo (info) {
    this._name.textContent = info.name;
    this._desc.textContent = info.desc;
  }
}
