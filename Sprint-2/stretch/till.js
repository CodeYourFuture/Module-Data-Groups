// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin); // "50p" -> 50
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
module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// ===> target output ll be 4.40 pound.

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// answer ===> we need Object.entries inside the loop, as our input is a key-value pair object. to access them its the easiest way to convert them to key-value array and do the other operations.

// c) What does coin * quantity evaluate to inside the for...of loop?
// answer ===> it operates multiplication on the key and the value.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
