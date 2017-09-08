var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100 + 1)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function getVerboseObject(object) {
  return `${Object.keys(object)[0]} at $${object[Object.keys(object)[0]]}`
}

function viewCart() {
  if (cart.length < 1) {
    console.log(`Your shopping cart is empty.`);
    return
  }
  var verboseCart = `In your cart, you have ${getVerboseObject(cart[0])}`
  if (cart.length == 1) {
    console.log(`${verboseCart}.`)
  } else if (cart.length == 2) {
    console.log(`${verboseCart} and ${getVerboseObject(cart[1])}.`);
  } else {
    for (var i = 1; i < cart.length - 1; i++) {
      verboseCart = `${verboseCart}, ${getVerboseObject(cart[i])}`
    }
    console.log(`${verboseCart}, and ${getVerboseObject(cart[cart.length-1])}`)
  }
}

cart = [{'pie': 3}, {'jam': 99}, {'wood': 55}]
viewCart()

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
