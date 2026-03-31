// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
     const coinValue = parseInt(coin);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}


module.exports = totalTill;

/*

a) What is the target output when totalTill is called with the till object
  ----£4.40 because the total value of the coins in the till is 440 pence, which is equivalent to £4.40.

b) Why do we need to use Object.entries inside the for...of loop in this function?
  ----Object.entries allows us to iterate over the key-value pairs of the till object, 
  otherwise is an object and we cannot directly iterate over it with a for...of loop.

c) What does coin * quantity evaluate to inside the for...of loop?
    ----£NaN because the coin values are strings multiplied by numbers, which results in NaN.

d) Write a test for this function to check it works and then fix the implementation of totalTill

**/