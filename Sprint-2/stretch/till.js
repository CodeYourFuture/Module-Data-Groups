// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += parseInt(coin) * quantity;
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
console.log(totalTill({ "1p": 100, "8p": 200 }));

// a) What is the target output when totalTill is called with the till object
// the target input would be the total coin multiplied by there quantity,
// but currently the code will not retain the desired results because the coins are a string so need to extract the number part of the coins.

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// we need it to be able to loop through the object, as objects are not iterable with the for loop

// c) What does coin * quantity evaluate to inside the for...of loop?
// the coin * quantity evaluates to the total value of the coins

// d) Write a test for this function to check it works and then fix the implementation of totalTill
module.exports = totalTill;
