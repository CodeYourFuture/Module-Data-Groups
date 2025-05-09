// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const value = parseInt(coin); // convert coin string to integer
    total += value * quantity;
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

console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
/* const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
*/

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// to make it easy to work with with both key(coin)/value(quantity)
// given an access to the keys/values

// c) What does coin * quantity evaluate to inside the for...of loop?
// coins is a string key ("1p", "5p"...)
// quantity is a number value 
// when JS tries to multiply coin * quantity it attempts to convert coin to a number
// If coin contains non-numeric characters the conversion fails > the result is NaN

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// till.test.js