let cart;
(async () => {
  const cartModule = await import('./modules/cart/main.mjs');
  cart = new cartModule.default();
})();

function updateDOMCartSize() {
  const cartSizeChip = document.getElementById("cartSizeChip");
  cartSizeChip.textContent = cart.getSize();
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".product button");

  addToCartButtons.forEach((button) => button.addEventListener('click', (event) => {
    cart.add({});
    console.log(this, event.target);
    updateDOMCartSize();
  }));
});