// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

   for (const [coin, quantity] of Object.entries(till)) {
    // Remove the "p" and convert to number
    const coinValue = parseInt(coin.replace("p", ""), 10);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

// ✅ Test
const till = {
  "1p": 10,  // 10p
  "5p": 6,   // 30p
  "50p": 4,  // 200p
  "20p": 10  // 200p
};

const totalAmount = totalTill(till);
console.log(totalAmount); // Should log: "£4.40"

// a) What is the target output when totalTill is called with the till object
// The target output is called with the till object is "£3.16".

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// to iterate over the key-value pairs of the till object, allowing us to access both the coin denomination (key) and its quantity (value) in each iteration.

// c) What does coin * quantity evaluate to inside the for...of loop?
// It evaluates to the total value of that specific coin denomination in pence, calculated by multiplying the coin's value (in pence) by its quantity in the till.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
module.exports = totalTill;

