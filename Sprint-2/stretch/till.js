// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const value = parseInt(coin); // "1p" → 1
    total += value * quantity;
  }
  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object\
// "£4.40"
//  Explanation:
//  1p * 10 = 10p
//  5p * 6 = 30p
//  50p * 4 = 200p
//  20p * 10 = 200p
//  Total = 440p → £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries(till) returns an array of [key, value] pairs. This allows us to iterate over both the coin type (key) and its quantity (value) easily.

// c) What does coin * quantity evaluate to inside the for...of loop?
// As currently written, coin is a string like "1p", "5p".
// Multiplying a string by a number (e.g., "1p" * 10) results in NaN.
// Therefore, we need to convert the string to a number first using parseInt(coin).

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// See the test file till.test.js
