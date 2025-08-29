// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = parseInt(coin); // e.g., "50p" -> 50
    total += valueInPence * quantity;
  }

  return `£${(total / 100).toFixed(2)}`; // formatted to 2 decimal places
}


// a) What is the target output when totalTill is called with the till object

// The goal of the totalTill function is to calculate the total monetary value of the coins in the till object and return it as a formatted string in pounds 

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// It returns an array of key–value pairs from the object. Using Object.entries(obj) gives us both the key and value in each iteration:

// c) What does coin * quantity evaluate to inside the for...of loop?
  
// Multiply the quantity times the value of the coin, But coin is a string like "1p" or "50p", so multiplying it directly with 
// quantity gives NaN (Not a Number), because JavaScript cannot multiply a string like "1p".

// d) Write a test for this function to check it works and then fix the implementation of totalTill
