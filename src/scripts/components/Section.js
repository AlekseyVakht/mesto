export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(elem) {
    this._container.prepend(elem);
  }

  renderCards() {
    this._renderedItems.forEach(this._renderer);
  }
}