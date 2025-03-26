// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {

    // remove last word from coin and change the coin to number format
   let penny = Number(coin.slice(0,-1));
    total += penny * quantity;
    
  }
  // remove decimal and return only number 
  return `£${total/100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);


module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// Ans: The target output is total amount of pound for all coins .

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Ans : object are not iterable , object.entries convert an object to array with key ,value pair . So it can iterate with for....of loop

// c) What does coin * quantity evaluate to inside the for...of loop?
// Ans : it multiply coin & quantity from the key value array and add to the total 

// d) Write a test for this function to check it works and then fix the implementation of totalTill
