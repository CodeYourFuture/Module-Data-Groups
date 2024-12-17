// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {

  const tillCoins = {
    "1p": 1,
    "5p": 5,
    "50p": 50,
    "20p": 20,
  };

  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
    total += tillCoins[coin] * quantity;
  }

  return `£${total / 100}`;
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
// a) What is the target output when totalTill is called with the till object? - target output is £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// b) Why do we need to use Object.entries inside the for...of loop in this function? - 

// c) What does coin * quantity evaluate to inside the for...of loop?
// c) What does coin * quantity evaluate to inside the for...of loop? - it evaluates to the total of the coins in pence

// d) Write a test for this function to check it works and then fix the implementation of totalTill
