export default class{#products={};constructor(){}add(t){this.#products[t.id]=t}remove(t){delete this.#products[t]}clear(){this.#products={}}getSize(){return Object.keys(this.#products).length}getAll(){return this.#products}}