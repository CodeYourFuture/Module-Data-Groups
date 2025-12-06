// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  if (typeof till !== "object" || till === null || Array.isArray(till)) {
    throw new Error("Input should be an object");
  }

  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const value = parseInt(coin); // extracts the numeric part

    if (isNaN(value)) continue;

    total += value * quantity;
  }

  const pounds = Math.floor(total / 100);
  const pence = String(total % 100).padStart(2, "0");

  return `£${pounds}.${pence}`;
}

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// --> The target output should be £4.40
// b) Why do we need to use Object.entries inside the for...of loop in this function?
// --> To get both the key and value of the till object inside the loop.
// c) What does coin * quantity evaluate to inside the for...of loop?
// --> It is supposed to calculate the total number of pence
// d) Write a test for this function to check it works and then fix the implementation of totalTill


// In till.js function implemented. 