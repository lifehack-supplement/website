let cart;
(async () => {
  const cartModule = await import('./modules/cart/main.mjs');
  cart = new cartModule.default();
})();

function updateDOMCartSize() {
  const cartSizeChip = document.getElementById("cartSizeBubble");
  const cartSize = cart.getSize();
  cartSizeChip.textContent = cartSize;
  cartSizeChip.classList.add("show");
  cartSizeChip.classList.remove("hide");
  
  if (cartSize === 0) {
    cartSizeChip.classList.add("hide");
    cartSizeChip.classList.remove("show");
  }
}

function deleteOne() {
  const allProducts = cart.getAll();
  cart.remove(Object.keys(allProducts)[0]);
  updateDOMCartSize();
}

function clearCart() {
  cart.clear();
  updateDOMCartSize();
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".product button");

  addToCartButtons.forEach((button) => button.addEventListener('click', (event) => {
    cart.add({ id: Math.floor(Math.random()*100) });
    updateDOMCartSize();
  }));
});