// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
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

// a) What is the target output when totalTill is called with the till object

//When totalTill is called with the  object, the target output is: 3,99

// b) Why do we need to use Object.entries inside the for...of loop in this function?

//We use Object.entries because it converts the till object into an array of [key, value] pairs. According to what GPT has said it makes iteration easier


// c) What does coin * quantity evaluate to inside the for...of loop?

//This shows us the total value of a coin in pences.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

//i've written a test file in the test.till.js

module.exports = totalTill;