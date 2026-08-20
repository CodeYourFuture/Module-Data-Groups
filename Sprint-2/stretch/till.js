// totalTill takes an object representing coins in a till
// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

// a) What is the target output when totalTill is called with the till object
//    { "1p": 10, "5p": 6, "50p": 4, "20p": 10 }?
// -> "£4.40" - 10p (1p x10) + 30p (5p x6) + 200p (50p x4) + 200p (20p x10)
//    = 440p total = £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// -> Object.entries(till) returns an array of [coin, quantity] pairs so
//    both values can be destructured together in each loop iteration.

// c) What does coinValue * quantity evaluate to inside the for...of loop?
// -> The total value, in pence, contributed by that one coin denomination.

// d) Write a test for this function to check it works and then fix the
//    implementation of totalTill
// -> See till.test.js. The fix: parse each coin string to a number with
//    parseInt before multiplying, and format the result to 2 decimal places.

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }

  return `£${parseFloat((total / 100).toFixed(2))}`;
}

module.exports = totalTill;
