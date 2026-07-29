import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/pymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();