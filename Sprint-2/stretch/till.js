// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;
  for (const [coin, quantity] of Object.entries(till)) {
    const numericValue = parseInt(coin); 
    total += numericValue * quantity;
  }
  return `£${(total / 100).toFixed(2)}`; 
}



// a) What is the target output when totalTill is called with the till object
    /*
    10 × 1p = 10p
    6 × 5p = 30p
    4 × 50p = 200p
    10 × 20p = 200p
Total: 10 + 30 + 200 + 200 = 440p = £4.40
    */
// b) Why do we need to use Object.entries inside the for...of loop in this function?
/*
To returns an array of [key, value] pairs from the object till.

In this case, keys are coin names like "1p", and values are how many of that coin we have.
   Object.entries(till)=>
 [["1p", 10], ["5p", 6], ["50p", 4], ["20p", 10]]

*/
// c) What does coin * quantity evaluate to inside the for...of loop?
  /*
  It doesn't work correctly.because coin is a string like "1p" or "50p".

    Trying to multiply a string ("1p") by a number gives NaN.
  */
// d) Write a test for this function to check it works and then fix the implementation of totalTill
 
module.exports = totalTill