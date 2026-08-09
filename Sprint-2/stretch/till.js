// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
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

// a) What is the target output when totalTill is called with the till object
"£4.40"
// b) Why do we need to use Object.entries inside the for...of loop in this function?
We need it because plain objects are not directly iterable using a for...of loop in JavaScript. Using Object.entries allows us to loop through the entries
// c) What does coin * quantity evaluate to inside the for...of loop?
coin * quantity evaluates to NaN (Not-a-Number).
// d) Write a test for this function to check it works and then fix the implementation of totalTill
  function totalTill(till) {
  let totalPence = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Parse the numeric pence value from strings like "50p" -> 50
    const penceValue = parseInt(coin, 10);
    
    if (!isNaN(penceValue)) {
      totalPence += penceValue * quantity;
    }
  }

  // Convert pence to pounds and format to 2 decimal places
  const pounds = (totalPence / 100).toFixed(2);
  return `£${pounds}`;
}

module.exports = totalTill;

const totalTill = require("./totalTill.js");

describe("totalTill", () => {
  test("calculates the correct total for a given till object", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
    expect(totalTill(till)).toBe("£4.40");
  });
});
