export let cart = JSON.parse(localStorage.getItem('cart')) || [
{ 
  productId: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c", 
  quantity: 1,
  deliveryOptionId: "1"
},
{ 
  productId: "1c079479-8586-494f-ab53-219325432536", 
  quantity: 1,
  deliveryOptionId: "2"

}, 
{ 
  productId: "ee1f7c56-f977-40a4-9642-12ba5072e2b0", 
  quantity: 1,
  deliveryOptionId: "3"
}
];

export function addToCart(productId) {
  let matchingItem;
    cart.forEach(item => {
      if(item.productId === productId) {
        matchingItem = item;
      }
    });
    if(matchingItem) {
      matchingItem.quantity += 1;
    } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1"
    })
  }
  saveToStorage();
};

export function removeFromCart(productId) {
  const newCart = [];
    cart.forEach((cartItem) => {
        if(productId !== cartItem.productId) {
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveToStorage();
}

export function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function updateDeliveryOptionId(productId, deliveryId) {
  let matchingItem;
    cart.forEach(item => {
      if(item.productId === productId) {
        matchingItem = item;
      }
    });
  matchingItem.deliveryOptionId = deliveryId;
  saveToStorage();
};