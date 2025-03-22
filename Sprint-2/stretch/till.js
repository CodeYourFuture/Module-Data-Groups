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
    total += tillCoins[coin] * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object? - target output is £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function? - converts the object into an array of key-value pairs.

// c) What does coin * quantity evaluate to inside the for...of loop? - it evaluates to the total of the coins in pence

// d) Write a test for this function to check it works and then fix the implementation of totalTill
