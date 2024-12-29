// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Remove 'p' and convert to number
    const numericCoin = parseInt(coin.replace("p", ""), 10);
    total += numericCoin * quantity;
  }

  // Format the total as pounds
  return `£${(total / 100).toFixed(2)}`;
}
 
module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries(till) returns an array of key-value pairs for the till object. This can
 //enable to use a for.of loop for iteration of every type of coin and its number

// c) What does coin * quantity evaluate to inside the for...of loop?
//It evaluates to the total value of that specific coin type. 

// d) Write a test for this function to check it works and then fix the implementation of totalTill
