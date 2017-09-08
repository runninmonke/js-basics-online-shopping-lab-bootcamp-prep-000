var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.round(Math.floor()*100 + 1))
 console.log(`${item} has been added to your cart.`)
 return cart
}

function getVerboseObject(object) {
  return `${Object.keys(object)[0]} at ${object[Object.keys(object)[0]]}`
}

function viewCart() {
  var verboseCart = `In your cart, you have ${getVerboseObject(cart[0])}`
  if (cart.length < 1) {
    console.console.log(`Your shopping cart is empty.`);
  } else if (cart.length == 1) {
    console.log(`${verboseCart}.`)
  } else if (cart.length == 2) {
    console.console.log(`${verboseCart} and ${getVerboseObject(cart[1])}.`);
  } else {
    for (var i = 1; i < cart.length - 1; i++) {
      verboseCart += `, ${getVerboseObject(cart[i])}`
    }
    console.log(`${verboseCart}, and ${getVerboseObject(cart.slice(cart.length - 1))}`)
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
