
export default class UserInfo {
  //   Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
  // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
  // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
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
