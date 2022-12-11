export default class Cart {
  #products = {};
  constructor() {}

  add(product) {
    this.#products[product.id] = product;
  }

  remove(productId) {
    delete this.#products[productId];
  }

  clear() {
    this.#products = {};
  }

  getSize() {
    return Object.keys(this.#products).length;
  }

  getAll() {
    return this.#products;
  }
};