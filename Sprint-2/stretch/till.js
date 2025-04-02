// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Validate if the coin has a valid numeric value
    const coinValue = Number(coin.substring(0, coin.length - 1));
    
    if (isNaN(coinValue)) {
      return undefined; // Return undefined for invalid coin names
    }
    
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

// a) What is the target output when totalTill is called with the till object
// The target output is £4.4, however with the current implementation is undefined because coin is not a number
// console.log(totalAmount); // Expected output: undefined

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Because we need to iterate through the keys and values of the till object and multiply each coin by its quantity to get the total amount.

// c) What does coin * quantity evaluate to inside the for...of loop?
// total pence of a coin kind

// d) Write a test for this function to check it works and then fix the implementation of totalTill
module.exports = totalTill;
