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
  if (!till || typeof till !== 'object' || !Array.isArray(till.coins)) {
    throw new Error("Invalid input: till must be an object with a 'coins' array");
  }

  // Access the array of coins
  const validCoins = till.coins.filter(coin => typeof coin === 'number' && !isNaN(coin));

  // Sum up the valid coins
  const totalPence = validCoins.reduce((sum, coin) => sum + coin, 0);

  // Convert pence to pounds and format
  const totalPounds = (totalPence / 100).toFixed(2);

  return `£${totalPounds}`;
}

module.exports = totalTill;


