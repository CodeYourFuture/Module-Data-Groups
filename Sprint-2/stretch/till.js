// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValueInPence = Number.parseInt(coin, 10);
    total += coinValueInPence * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

// a) What is the target output when totalTill is called with the till object

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// c) What does coin * quantity evaluate to inside the for...of loop?

// d) Write a test for this function to check it works and then fix the implementation of totalTill

module.exports = totalTill;
