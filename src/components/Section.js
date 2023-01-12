export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this.renderedItems.reverse().forEach(this._renderer);
  }
}
