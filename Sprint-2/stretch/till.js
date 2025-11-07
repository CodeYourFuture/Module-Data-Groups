// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const numericCoin = parseInt(coin.replace('p', ''));
    total += numericCoin * quantity;

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
// Target output: £4.10

// b) Why do we need to use Object.entries inside the for...of loop in this function? 
// We use Object.entries to convert the till object into an array of [key, value] pairs, allowing us to iterate over each coin type and its corresponding quantity easily.

// c) What does coin * quantity evaluate to inside the for...of loop?
// Inside the for...of loop, coin * quantity evaluates to NaN (Not a Number) because coin is a string (e.g., "1p") and multiplying a string by a number results in NaN.

// d) Write a test for this function to check it works and then fix the implementation of totalTill 


// Tests
console.log(totalTill(till));
console.log(totalTill({ "2p": 5, "10p": 3 }));
