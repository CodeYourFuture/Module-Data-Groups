// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }

  return `£${total / 100}`;
}

// a) What is the target output when totalTill is called with the till object
// a) The target output is £4.4

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// b) Object.entries converts the object into key-value pairs,
//    allowing us to access both the coin and its quantity.

// c) What does coin * quantity evaluate to inside the for...of loop?
// c) coinValue * quantity calculates the total value
//    of that type of coin.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
module.exports = totalTill;
