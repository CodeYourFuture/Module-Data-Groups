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
// 440p = £4.40


// b) Why do we need to use Object.entries inside the for...of loop in this function?
// returns an array of [key, value] pairs [ ["1p", 10], ["5p", 6] ]
// It allows us to loop over both keys and values easily


// c) What does coin * quantity evaluate to inside the for...of loop?
// It evaluates to NaN, because coin is a string (e.g. "1p") and cannot be multiplied by a number (e.g. 10).
// To fix this, we need to convert the coin string to a number by removing the "p" and converting it to an integer.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin); // extract the number from "1p"
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}