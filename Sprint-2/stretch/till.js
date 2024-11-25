// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

//function totalTill(till) {
 // let total = 0;

  //for (const [coin, quantity] of Object.entries(till)) {
  //  total += coin * quantity;
  //}

  //return `£${total / 100}`;
//}

//const till = {
 // "1p": 10,
 // "5p": 6,
  //"50p": 4,
 // "20p": 10,
//};
//const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
//"£4.40"


// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries() is used to convert the till object into an array of key-value pairs. The for...of loop then allows us to iterate over each key-value pair.


// c) What does coin * quantity evaluate to inside the for...of loop?
//Inside the for...of loop, coin is a string representing the denomination (e.g., "1p"), and quantity is a number representing the number of coins (e.g., 10).

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// totalTill.js

function totalTill(till) {
  let total = 0;

  // Coin values in pence (1p = 1, 5p = 5, etc.)
  const coinValues = {
    "1p": 1,
    "5p": 5,
    "20p": 20,
    "50p": 50,
    "1": 100, // Full pound coin (if included)
  };

  for (const [coin, quantity] of Object.entries(till)) {
    // Check if the coin is a valid key in the coinValues object
    const coinValue = coinValues[coin];

    // Only add valid coins (those that exist in the coinValues object)
    if (coinValue !== undefined) {
      total += coinValue * quantity;
    }
  }

  // Return the total amount in pounds, formatted to two decimal places
  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

