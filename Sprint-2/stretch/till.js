// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin.replace("p", ""), 10);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);

// a) What is the target output when totalTill is called with the till object
// expected output is £4.06

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries converts an array into a [key, value] pairs.
// for...of is used to iterate over arrays, objects are not directly iterable and therefore need Object.entries to create an array of key value pairs in order to loop through each [coin, quantity] pair.

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin is the string key whereas quantity is the value e.g. "1p" is the key and 10 is the value.
// multiplying coin * quantity will result in a NaN (Not a Number) because coin isn't a number but a string.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// to fix this implementation the coin string must be parsed into a number before multiplying, i will first remove the "p" from the string and convert it to a number.
