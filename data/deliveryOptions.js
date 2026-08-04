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

  let deliveryDate = dayjs(); 
  //const days = deliveryDate.format("dddd");
  //const dateString = deliveryDate.format("dddd, MMMM D");
  
  let reaminingDays = deliveryOption.days;

  while(reaminingDays>0) {
    deliveryDate = deliveryDate.add(1,'day');
    
    const days = deliveryDate.format('dddd');
    
    if(!isWeekend(days)) {
    reaminingDays--;
    }
  };
    
const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
};

function isWeekend(days) {
  const weekendDays = ['Saturday','Sunday'];
  let isWeekendDay;
  for(let i = 0;i<weekendDays.length;i++) {
    if(days === weekendDays[i]) {
      isWeekendDay = true;
    }
  }
  if (!isWeekendDay) {
    isWeekendDay = false;
  }
return isWeekendDay;
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