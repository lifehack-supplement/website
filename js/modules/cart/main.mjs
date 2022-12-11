export default class Cart {
  #products = [];
  constructor() {}

  add(product) {
    this.#products.push(product);
  }

  remove(product) {

  }

  getSize() {
    return this.#products.length;
  }
};