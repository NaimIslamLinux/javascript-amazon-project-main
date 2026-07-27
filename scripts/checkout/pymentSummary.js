import {cart} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '.././utils/money.js';

export function renderPaymentSummary() {
let productPriceCents = 0;
let deliveryPriceCents = 0;
let totalBeforeTaxCents = 0;
let taxCents = 0;
let orderTotal = 0;

cart.forEach(cartItem => {
    const matchingProduct = getProduct(cartItem.productId);
    productPriceCents += matchingProduct.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    deliveryPriceCents += deliveryOption.priceCents;
})

totalBeforeTaxCents = productPriceCents + deliveryPriceCents;

taxCents = Math.round(totalBeforeTaxCents * 0.1);

orderTotal = totalBeforeTaxCents + taxCents;

const pymentSummaryHTML =  
`
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)} </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
`;

document.querySelector('.js-payment-summary').innerHTML = pymentSummaryHTML;
};