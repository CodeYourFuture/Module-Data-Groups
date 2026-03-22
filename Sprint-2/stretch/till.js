// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

// Calculate the total value of all coins in the till
function totalTill(till) {
  // Start with a total of 0 pence
  let total = 0;

  // Loop through each [coin, quantity] pair in the till object
  for (const [coin, quantity] of Object.entries(till)) {
    // Use parseInt to extract the number from strings like "50p"
    // parseInt("50p") returns 50, parseInt("1p") returns 1
    const coinValue = parseInt(coin);

    // Multiply the coin value in pence by the quantity of that coin
    total += coinValue * quantity;
  }

  // Divide by 100 to convert pence to pounds and add the pound symbol
  return `£${total / 100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object?
// Answer: "£4.4"
// Because: (1 * 10) + (5 * 6) + (50 * 4) + (20 * 10) = 10 + 30 + 200 + 200 = 440 pence
// 440 / 100 = 4.4 pounds

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Answer: Because for...of cannot loop over a plain object directly.
// Object.entries(till) converts the object into an array of [key, value] pairs
// like [["1p", 10], ["5p", 6], ["50p", 4], ["20p", 10]]
// This allows for...of to loop through each pair and destructure it into [coin, quantity].

// c) What does coin * quantity evaluate to inside the for...of loop?
// Answer: In the ORIGINAL buggy code, coin * quantity gives NaN every time.
// Because coin is a string like "1p", and "1p" * 10 is NaN.
// JavaScript cannot multiply a string containing letters by a number.
// The fix is to use parseInt(coin) which extracts just the number part.
// For example: parseInt("50p") gives 50, so 50 * 4 gives 200.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// Answer: The fix is on line 17 above: using parseInt(coin) instead of coin directly.
// See till.test.js for the test file.

/*
## How to Test

node stretch/till.js


Expected output:

£4.4
*/
