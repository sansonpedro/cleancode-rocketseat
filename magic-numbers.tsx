// simples

// setTimeout, setInterval, 

const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

setTimeout(() => {
  
}, THIRTY_DAYS);

// Avançado

function calculateDiscount(priceInCents: number, discountAmountInPercentages: number = 10) {
  return priceInCents - (priceInCents * discountAmountInPercentages / 100);
}