export default class Section {
  constructor (data, container) {
    this._container = document.querySelector(container);
    this._renderer = data.renderer;
    this._items = data.items;
  }

  addItem (element) {
    this.renderItems();
  }

  renderItems () {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}
