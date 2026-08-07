// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // parseInt pulls the number out of strings like "1p", "5p", "50p"
    total += parseInt(coin) * quantity;
  }

  // toFixed(2) ensures we always get 2 decimal places e.g. £3.60 not £3.6
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
// The till has: 10x1p = 10p, 6x5p = 30p, 4x50p = 200p, 10x20p = 200p
// Total = 440p = £4.40
// So the target output is "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Because for...of cannot loop over a plain object directly — objects are not iterable.
// Object.entries(till) converts the object into an array of [key, value] pairs like:
// [ ["1p", 10], ["5p", 6], ["50p", 4], ["20p", 10] ]
// This makes it iterable so for...of can go through each [coin, quantity] pair.
// We also use destructuring [coin, quantity] to unpack each pair into two named variables
// instead of having to write pair[0] and pair[1].

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin is a string like "1p", "5p", "50p" — it is NOT a number.
// In the original code, coin * quantity uses JavaScript's implicit type coercion.
// When you multiply a string by a number, JavaScript tries to convert the string to a number.
// "1p" * 10 gives NaN because "1p" cannot be fully converted to a number.
// "5p" * 6 also gives NaN for the same reason.
// This means total ends up as NaN and the function returns "£NaN".
// The fix is to use parseInt(coin) which extracts just the numeric part from the string,
// so parseInt("1p") gives 1, parseInt("50p") gives 50, and so on.
// Then parseInt(coin) * quantity gives the correct pence value for each coin.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// The fix has been applied above — parseInt(coin) extracts the number from the coin string.
console.assert(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 }) === "£4.40", "Test 1 failed");
console.assert(totalTill({ "1p": 0, "5p": 0, "50p": 0, "20p": 0 }) === "£0.00", "Test 2 failed - empty till");
console.assert(totalTill({ "50p": 2 }) === "£1.00", "Test 3 failed - single coin type");
console.assert(totalTill({ "1p": 100 }) === "£1.00", "Test 4 failed - 100 pennies");
console.log("All tests passed!");
