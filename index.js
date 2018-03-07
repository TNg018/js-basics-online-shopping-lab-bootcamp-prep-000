var cart = [];

function getCart() {
 return cart;
}

function setCart(newCart) {
  cart = newCart;
  return cart
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
    t += cart[i][item]
    }
  }
  return t
}

function addToCart(item){
  var price = Math.random() * 100
  var roundedPrice = Math.floor(price)
  cart.push({[item]: roundedPrice})
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  if ( cart.length > 0 ) {
        var list = [];
        for(var i = 0; i < cart.length; i++) {
            var myItems = Object.keys(cart[i]);

            list.push( " " + myItems + " at $" + cart[i][myItems] );

        }
return console.log('In your cart, you have' + list + ".");

    } else {
        console.log('Your shopping cart is empty.');
    }
}




function removeFromCart(item) {
  for(var i = 0, l = cart.length; i < l; i++){

  for(var list in cart[i]){
      if(item === list){
        cart.splice(i,1)
        return cart
        }
      }
    }
   if (!item)
   var i = 0
console.log("That item is not in your cart.");
    }





function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
  return console.log("Sorry, we don't have a credit card on file for you.");
} else {
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCardNumber + ".")
  return cart = []
}
}
