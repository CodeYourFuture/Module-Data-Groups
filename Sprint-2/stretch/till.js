// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
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

// a) What is the target output when totalTill is called with the till object?
// The target output is the total amount in pounds, formatted as a string with a pound sign 
// e.g. "£2.00"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries is used to get an array of key-value pairs from the till object, allowing 
// us to iterate over each coin and its corresponding quantity. 


// c) What does coin * quantity evaluate to inside the for...of loop?
// coin * quantity evaluates to the total value of that type of coin in pence. 

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// The test should check that totalTill returns the correct total amount in pounds for a given till object.
