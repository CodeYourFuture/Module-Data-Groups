// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds
 
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
     
    const coinValue = parseInt(coin.slice(0, -1), 10);  
    total += coinValue * quantity; 
  }

  return `£${(total / 100).toFixed(2)}`;  
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

module.exports = totalTill; 

// a) What is the target output when totalTill is called with the till object
// The target about when totaltill is called is £4.40.

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries(till) is used to convert the till object into an array of key-value pairs. 
//Each entry in this array is an array itself, where the first element is the coin denomination (as a string) and the second element is the quantity of that coin.
// this will then allows us to iterate over both the coin type and its quantity in the for...of loop.

// c) What does coin * quantity evaluate to inside the for...of loop?

//In the current implementation, coin is a string ("1p", "5p", ), and quantity is a number (the count of that coin). 
//When you try to multiply a string by a number ("1p" * 10), it results in NaN (Not a Number) because the string cannot be converted to a number for multiplication.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
