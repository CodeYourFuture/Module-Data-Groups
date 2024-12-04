// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin.replace("p", ""));
    total += coinValue * quantity;
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
// a) What is the target output when totalTill is called with the till object
// The target output is the total amount in string format

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries converts the object into an array of key-pairs.

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin * quantity is supposed to calculate the total value of a specific coin type based on its quantity.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
