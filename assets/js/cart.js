var itemsInCart = 0;
var itemsInCartCounter = document.querySelector(".header-nav-cart-counter");
function updateItemsInCart() {
  if (itemsInCart > 0) {
    itemsInCartCounter.textContent = itemsInCart;
  } else if (itemsInCart == 0) {
    itemsInCartCounter.style.opacity = 0;
  } else {
    itemsInCart = 0;
    updateItemsInCart();
  }
}
