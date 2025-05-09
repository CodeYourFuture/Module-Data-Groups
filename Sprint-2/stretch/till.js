// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    let newCoin = +[coin.slice(0,-1)];
    total += newCoin * quantity;
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
console.log(totalTill(totalAmount));
module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object : £3

// b) Why do we need to use Object.entries inside the for...of loop in this function? to convert objet to an array of pairs

// c) What does coin * quantity evaluate to inside the for...of loop? sum of pennies

// d) Write a test for this function to check it works and then fix the implementation of totalTill
