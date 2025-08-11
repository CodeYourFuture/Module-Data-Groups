// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const penceWithoutP = coin.slice(0, coin.length - 1);
    total += penceWithoutP * quantity;
  }

  return `£${total / 100}`;
}
module.exports = totalTill;

const till = {
  "2p": 5,
  "10p": 3,
  "1p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
// target output: 440p
// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries converts the object into an array of [key, value] pairs, allowing us to destructure them directly in the loop:
// c) What does coin * quantity evaluate to inside the for...of loop?
//`coin * quantity` evaluates to `NaN` because coin is a string ("1p") and cannot be multiplied by a number (quantity) without conversion.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
