// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

/*function totalTill(till) {
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
const totalAmount = totalTill(till);*/

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries is needed because it gives us each coin and its quantity as a pair, allowing the for…of loop to work with both values together.

// c) What does coin * quantity evaluate to inside the for...of loop?
//Inside the loop, coin * quantity evaluates to NaN because coin is a string like "1p", and JavaScript cannot multiply a string by a number.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = parseInt(coin);
    total += valueInPence * quantity;
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
module.exports = totalTill;
