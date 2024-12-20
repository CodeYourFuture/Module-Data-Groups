// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

// function totalTill(till) {
//   let total = 0;

//   for (const [coin, quantity] of Object.entries(till)) {
//     total += coin * quantity;
//   }

//   return `£${total / 100}`;
// }

// const till = {
//   "1p": 10,
//   "5p": 6,
//   "50p": 4,
//   "20p": 10,
// };
// const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
        // 1p × 10 = 10p
        // 5p × 6 = 30p
        // 50p × 4 = 200p
        // 20p × 10 = 200p
        // Total: 10p + 30p + 200p + 200p = 440p = £3.30.




// b) Why do we need to use Object.entries inside the for...of loop in this function?
    
        // Object.entries is used to iterate over both the keys (coin denominations) and their corresponding values (quantities) in the till object.
        // Without Object.entries, we would only get keys or values separately, making it harder to calculate coin * quantity.

// c) What does coin * quantity evaluate to inside the for...of loop?
 
// coin * quantity attempts to multiply the coin (a string like "1p") by the quantity, resulting in NaN.
// This happens because strings like "1p" cannot be directly converted to numbers for arithmetic operations.


// d) Write a test for this function to check it works and then fix the implementation of totalTill
//The totalTill function must correctly convert coin keys (like "1p") to numeric values before performing calculations. Here's the fixed implementation and a corresponding test suite.

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Extract the numeric part of the coin string and convert to a number
    const coinValue = parseInt(coin.replace("p", ""), 10);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}
