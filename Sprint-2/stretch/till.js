// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let totalInPence = 0;

  for (const [coin, quantity] of Object.entries(till)) {
let coinWithoutP =coin.replace("p","");
totalInPence += Number(coinWithoutP) * quantity


    
  }
  let totalInPound = totalInPence / 100;

  return `£${totalInPound.toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalTill(till))

// a) What is the target output when totalTill is called with the till object
//When called with the till object, the correct output is: £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries(till) converts the till object into an array of [coin, quantity] pairs: [ ["1p", 10], ["5p", 6], ["50p", 4], ["20p", 10] ]
//Without it, we couldn’t easily access both keys and values together.


// c) What does coin * quantity evaluate to inside the for...of loop?
//coin is a string. Multiplying a string with a number ("1p" * 10) gives NaN.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

module.exports = totalTill;