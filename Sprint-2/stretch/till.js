// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
     const coinValue = parseInt(coin);
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

console.log(totalAmount)

// a) What is the target output when totalTill is called with the till object
// The function should calculate the total amount of money in the till and return it as a string formatted in pounds.
// Sum = 10 + 30 + 200 + 200 = 440p → £4.40


// b) Why do we need to use Object.entries inside the for...of loop in this function?
//  it used to  convert the object into an array of key-value pairs,

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin is a string like "1p", "5p", etc. Multiplying a string that includes non-numeric characters by a number results in NaN 

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const till1 = {
   "1p": 1,
  "5p": 5,
  "50p": 9,
  "20p": 2,
};

const expected = "£5.16";
const actual = totalTill(till1);
console.assert(actual === expected, `Expected ${expected} but got ${actual}`);
