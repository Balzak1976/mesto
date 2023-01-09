export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this.renderedItems.forEach(this._renderer);
  }
}
