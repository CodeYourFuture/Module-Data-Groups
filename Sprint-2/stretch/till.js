// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin); 
    if (isNaN(coinValue)) {
      continue;
    }
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
console.log(totalAmount);
module.exports = totalTill; 

// a) What is the target output when totalTill is called with the till object
// 10p + 30p + 200p + 200p = 440p → £4.40  so the target output is "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// because till os an object and if we use Object.entries, it will return an array of key-value pairs.
// if we don't use Object.entries, we would either get the keys (with Object.keys) or only the values (with object.values), but not both

// c) What does coin * quantity evaluate to inside the for...of loop?
//The expression coin * quantity tries to multiply a string (coin) by a number (quantity).
// so coin * quantity evaluates to NaN because coin is a string like "50p", and JavaScript cannot multiply a non-numeric string by a number.
// to fix that we need to extract the number from "50p"
// parseInt(coin) will convert the string "50p" to 50, and then we can multiply it by quantity.
// total += parseInt(coin) * quantity;
// d) Write a test for this function to check it works and then fix the implementation of totalTill

