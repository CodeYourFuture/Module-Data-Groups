// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

/*function totalTill(till) {
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
*/

// a) What is the target output when totalTill is called with the till object

// "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// We use Object.entries(till) so we can loop through both the coin name and the quantity at the same time.
//Example: Object.entries(till);
// returns:
/*[
  ["1p", 10],
  ["5p", 6],
  ["50p", 4],
  ["20p", 10]
]
*/
//This is needed because for...of works with arrays/iterables, and Object.entries turns the object into an array of key-value pairs that we can loop through.

// c) What does coin * quantity evaluate to inside the for...of loop?

// Right now coin is a string like "1p" or "50p".

//So inside the loop: coin * quantity, becomes things like:
//"1p" * 10 , "50p" * 4

//These evaluate to NaN because strings like "1p" and "50p" are not pure numbers.
//That’s why the implementation is broken.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = Number(coin.replace("p", ""));
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;
