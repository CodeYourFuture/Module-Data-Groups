// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  // Loop through the coin quantities
  for (const [coin, quantity] of Object.entries(till)) {
    // Extract numeric value from coin string (remove "p") and convert to a number
    const coinValue = parseInt(coin.replace("p", ""), 10);
    
    // Add the total value for the current coin type
    total += coinValue * quantity;
  }

  // Return total in pounds (converted from pence)
  return `£${(total / 100).toFixed(2)}`; // Using toFixed(2) to format to two decimal places
}


// a) What is the target output when totalTill is called with the till object

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// c) What does coin * quantity evaluate to inside the for...of loop?

// d) Write a test for this function to check it works and then fix the implementation of totalTill
