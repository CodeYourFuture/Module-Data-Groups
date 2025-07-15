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

// a) What is the target output when totalTill is called with the till object
// The target output when totalTill is called with the till object is "£3.16".
// The current output is "£0.00" because the implementation is incorrect.


// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We need to use Object.entries to iterate over the key-value pairs of the till object.
// It allows us to access both the coin (key) and its quantity (value) in each iteration.
// e.g. Object.entries(till) returns [["1p", 10], ["5p", 6], ["50p", 4], ["20p", 10]].


// c) What does coin * quantity evaluate to inside the for...of loop?
// Inside the for...of loop, coin * quantity evaluates to the total value of that type of coin in pence.
// For example, if coin is "1p" and quantity is 10, it evaluates
// to 1 * 10 = 10 pence.
// It evaluates to the total value of that type of coin in pence.


// d) Write a test for this function to check it works and then fix the implementation of totalTill
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin.replace('p', '')); // Convert coin string to number
    total += coinValue * quantity; // Calculate total in pence
  }

  return `£${(total / 100).toFixed(2)}`; // Return total in pounds formatted to two decimal places
}
