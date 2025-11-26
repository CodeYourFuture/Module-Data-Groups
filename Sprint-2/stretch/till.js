// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

//function totalTill(till) {
//let total = 0;

//for (const [coin, quantity] of Object.entries(till)) {
//   total += coin * quantity;
//} 

// return `£${total / 100}`;
//}

//const till = {
// "1p": 10,
//  "5p": 6,
//  "50p": 4,
//  "20p": 10,
//};
//const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object?
// Answer: £4.10

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Answer: Object.entries is used to convert the till object into an array of [key, value] pairs, allowing us to iterate over each coin type and its quantity.
// c) What does coin * quantity evaluate to inside the for...of loop?
// Answer: coin * quantity evaluates to NaN because coin is a string (e.g., "1p") and cannot be directly multiplied by a number.

// d) Write a test for this function to check it works and then fix the implementation of totalTill?


// Fix implementation
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Remove the 'p' and convert to number
    const coinValue = Number(coin.replace("p", ""));
    total += coinValue * quantity;
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

module.exports = totalTill;

// test cases:

const totalTill = require("./till.js");

test("totalTill calculates the total amount in pounds from the till object", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe("£4.10");
}); 

// Additional test cases
test("totalTill returns £0.00 for an empty till", () => {
  const till = {};

  expect(totalTill(till)).toBe("£0.00");
});

test("totalTill handles tills with only one type of coin", () => {
  const till = {
    "100p": 5,
  };

  expect(totalTill(till)).toBe("£5.00");
});
