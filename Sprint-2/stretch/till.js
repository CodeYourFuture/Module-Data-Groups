// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += parseInt(coin.replace('p', ''), 10) * quantity;
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

// a) What is the target output when totalTill is called with the till object

// The target output is the sum of all the product of the key-pair values

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// It is used to allow access to the key-value pairs of the object.

// c) What does coin * quantity evaluate to inside the for...of loop?

// It evaluates to the key times by the value e.g 1p * 10 = 10p

// d) Write a test for this function to check it works and then fix the implementation of totalTill
