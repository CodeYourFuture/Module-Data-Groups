// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinVlaue = parseInt(coin)
    total += coinVlaue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount)

// a) What is the target output when totalTill is called with the till object
    //target output is £4.4 

// b) Why do we need to use Object.entries inside the for...of loop in this function?
      // The till object is structured with coin values (e.g., "1p", "5p") as keys and the number of coins as values. To loop through this object:

// c) What does coin * quantity evaluate to inside the for...of loop?
       // In the loop, coin represents the coin denomination (e.g., "1p", "5p"), and quantity is the number of coins (e.g., 10, 6).

// d) Write a test for this function to check it works and then fix the implementation of totalTill
  module.exports =  totalTill
