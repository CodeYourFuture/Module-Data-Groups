// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
  }

  return `£${total / 100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object >> "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function? >> To iterate over both the keys (coin types) and values (quantities) of the till object.

// c) What does coin * quantity evaluate to inside the for...of loop? >> It evaluates to NaN because coin is a string (e.g., "1p") and cannot be directly multiplied by a number (quantity).

// d) Write a test for this function to check it works and then fix the implementation of totalTill

// Fixed implementation
function totalTillFixed(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

// Test
const tillTest = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmountTest = totalTillFixed(tillTest);
console.log(totalAmountTest);
