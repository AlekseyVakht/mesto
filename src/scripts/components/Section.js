export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addInitCard(elem) {
    this._container.prepend(elem);
  }

  addNewCard(elem) {
    this._container.append(elem);
  }

  renderCards(items) {
    items.forEach(item => {this._renderer(item)});
  }
}