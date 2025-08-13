// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

/*
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
*/

// a) What is the target output when totalTill is called with the till object
// target output: "£3.16"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We use Object.entries to get both the coin and its quantity in each iteration. 
// This allows us to iterate over the key-value pairs of the till object.

// c) What does coin * quantity evaluate to inside the for...of loop?
// Coin * quantity evaluates to the total value of that particular coin in pence.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin.replace("p", ""), 10);
    total += coinValue * quantity;
  }

  const pounds = total / 100;
  const formatted = pounds % 1 === 0 ? `£${pounds}` : `£${pounds.toFixed(2)}`;

  return formatted;
}

module.exports = totalTill;
