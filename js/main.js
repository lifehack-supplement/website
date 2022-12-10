let cart;
(async () => {
  const cartModule = await import('./modules/cart/main.mjs');
  cart = new cartModule.default();
})();

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".product button");

  addToCartButtons.forEach((button) => button.addEventListener('click', () => {
    console.log(cart);
  }));
});