import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;
  deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId) {
          deliveryOption = option;
      }
  });

  return deliveryOption || deliveryOptions[0];
};

export function calculateDeliveryDate(deliveryOption) {
const today = dayjs();
    const deliveryDate = today.add(deliveryOption.days, "day");
    const dateString = deliveryDate.format("dddd, MMMM D");

    return dateString;
};

export const deliveryOptions = [
  {
    id: '1',
    days: 7,
    priceCents: 0
  },
  {
    id: '2',
    days: 4,
    priceCents: 499
  },
  {
    id: '3',
    days: 1,
    priceCents: 999
  }
];