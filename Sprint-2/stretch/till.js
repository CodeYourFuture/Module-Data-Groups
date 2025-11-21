// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  if (typeof till !== "object" || Array.isArray(till) || till === null) {
    throw new Error("Input should be an object");
  }

  const validPence = ["1p", "5p", "20p", "50p"];

  let total = 0;

  console.log(Object.entries(till));

  for (const [coin, quantity] of Object.entries(till)) {
    if (validPence.indexOf(coin) === -1) {
      continue;
    }
    total += Number(coin.slice(0, coin.length - 1)) * quantity;
  }

  return `£${Math.floor(total / 100)}.${String(total % 100).padEnd(2, 0)}`;
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
// The target output is a string that state the total value of pound after converted from pence
// For example: '£4.40'

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We need to convert the object till into an array of arrays [ [ '1p', 10 ], [ '5p', 6 ], [ '50p', 4 ], [ '20p', 10 ] ]
// That will enable the loop process in the for loop.

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin * quantity was trying to get the value of each group of pence and add to the total
// However, coin is referencing to first element of each sub array, which is a string that can't do math operation

// d) Write a test for this function to check it works and then fix the implementation of totalTill
