// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // coin is a string like "1p", "20p"
    // We need to strip the "p" and convert it into a number of pennies
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
// Answer: £3.60 (10x1p + 6x5p + 4x50p + 10x20p = 360p = £3.60)

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Answer: Object.entries(till) returns an array of [coin, quantity] pairs,
// allowing us to iterate over both the coin name (e.g. "50p") and its count.

// c) What does coin * quantity evaluate to inside the for...of loop?
// Answer (before fix): NaN, because coin is a string like "50p". 
// After fix: coinValue * quantity gives the total pennies for that coin type.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// Answer: Fix shown above to parse coin values correctly.


