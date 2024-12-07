// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;
  const coinValues = {
    "1p": 1,
    "5p": 5,
    "20p": 20,
    "50p": 50,
  };

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = coinValues[coin]; 
    if (coinValue !== undefined) 
      total += coinValue * quantity; 
    
  }
  return `£${(total / 100).toFixed(2)}`;
};
module.exports=totalTill

// a) What is the target output when totalTill is called with the till object
/*
total=>"£4.40"
object=>
const till = {
  "1p": 10,  
  "5p": 6,  
  "50p": 4,  
  "20p": 10,
};
 */

// b) Why do we need to use Object.entries inside the for...of loop in this function?
/*
We used to iterate over the till object
*/

// c) What does coin * quantity evaluate to inside the for...of loop?
/* We can get an error because,multiplying a string by a number  results in NaN (Not a Number),so expression coin * quantity will not work as intended. */
// d) Write a test for this function to check it works and then fix the implementation of totalTill
