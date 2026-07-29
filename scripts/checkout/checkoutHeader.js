import { cart } from "../../data/cart.js";
export function renderCheckoutHeader() {
    const checkoutHeaderEl = document.querySelector('.checkout-header-quantity');
    let quantity = 0;
    cart.forEach((cartItem) => {
        quantity += cartItem.quantity;
    });
    checkoutHeaderEl.textContent = `${quantity} items`;
};