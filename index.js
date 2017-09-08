var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.round(Math.floor()*100) + 1})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.console.log(`Your shopping cart is empty.`);
  } else if (cart.length == 2) {
    console.console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at ${cart[0]} and ${Object.keys(cart[1])[0]} at ${cart[1]}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber) {

  }
}
