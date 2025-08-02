// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  // Check if till is in fact an object and not null
  if (typeof till !== "object" || till === null || Array.isArray(till)) {
    throw new TypeError("Input must be a non-null object");
  }

  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // total += coin * quantity;  <- this original line doesn't work because coin is a string
    //we have to remove the 'p' from the coin string and then convert it to a number so the total can be calculated correctly
    const coinValue = parseInt(coin.replace("p", ""));
    // multiply the coin value by its quantity and add to total
    total += coinValue * quantity;
  }
  // return the total amount in pounds, formatted to two decimal places to cover pence
  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// The target output of totalTill(till) is "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
/*
Object.entries() is a static method used to convert the properties of an object to an iterable array of [key, value] pairs so that they can be accessed using a for...of loop (it loops over the properties of the object). 
It is not possible to iterate directly over a regular object with a for...of loop because objects are not iterable in the same way that arrays are (you would need a for...in loop instead to iterate directly).
Therefore it using the Object.entries() method means the function has access to both the coin (key) and its quantity (value) in each iteration.
*/

// c) What does coin * quantity evaluate to inside the for...of loop?
// Inside the for...of loop, coin * quantity evaluates to NaN because coin is a string (e.g. "1p" or "5p") so when JavaScript tries to multiply a string by a number (the quantity values (e.g. 10, 6, etc), it cannot perform the operation and returns NaN (Not-a-Number).

// d) Write a test for this function to check it works and then fix the implementation of totalTill
/*
To fix the implementation of totalTill, we need to check there is a 'p' in the object's 'coin' key; if there is, use the string method .replace() to cut the character out of the string by replacing it with "" (i.e. an empty string).
Then, using the global function parseInt() convert the resulting string into a number. This means the coin value is now a number and can be multiplied in the for...of loop without returning NaN.
*/
