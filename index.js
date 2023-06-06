let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  cartItemsElement.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
    total += item.price;
  });
  
  cartTotalElement.textContent = total;
}

function clearCart() {
  cart = [];
  updateCart();
}
