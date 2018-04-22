cart = [];

function getCart() {
  return cart;}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item = {itemName: name, itemPrice: price};
  cart.push(item);
  return "${name} has been added to your cart."
}

function viewCart(){

}

function total() {

}

