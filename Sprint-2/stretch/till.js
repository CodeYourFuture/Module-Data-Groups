// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const value = parseInt(coin.replace("p", ""), 10); // Convert "1p" to 1
    total += value * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

// const till = {
//   "1p": 10,
//   "5p": 6,
//   "50p": 4,
//   "20p": 10,
// };
// const totalAmount = totalTill(till);
function testTotalTill() {
  const till = {
    "1p": 10, // 10p
    "5p": 6, // 30p
    "50p": 4, // 200p
    "20p": 10, // 200p
  };

  const expected = "£3.90";
  const result = totalTill(till);

  console.assert(
    result === expected,
    `Test failed: Expected ${expected}, got ${result}`
  );
}

testTotalTill();

/* a) What is the target output when totalTill is called with the till object

//When totalTill(till) is called, the target output is:
//£3.90.
// b) Why do we need to use Object.entries inside the for...of loop in this function?
Object.entries converts an object into an array of key-value pairs. This allows us to loop through both the keys (coin) and values (quantity) of the till object. Without Object.entries, we would need additional logic to extract values corresponding to each key.


// c) What does coin * quantity evaluate to inside the for...of loop?
coin * quantity attempts to calculate the total value of a specific coin type, but it will not work correctly because coin is a string (e.g., "1p") and not a numeric value. Multiplying a string by a number results in NaN.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
*/
