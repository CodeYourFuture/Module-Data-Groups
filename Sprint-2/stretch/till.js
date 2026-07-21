// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds
/*
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
console.log(totalAmount);*/

//-----------------------------------------------------------------------------------------------------

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Objects are not directly iterable, so we cannot use a for...of loop on an object.
// Object.entries converts the object into an array of key-value pairs.
// Each pair is an array containing [key, value], which allows us to use for...of with destructuring to access coin and quantity separately.

// c) What does coin * quantity evaluate to inside the for...of loop?
// It calculates the total value of each type of coin by multiplying the coin value by its quantity.
// However, coin is initially a string like "50p", so it must be converted into a number first before multiplication.

// d) Write a test for this function to check it works and then fix the implementation of totalTill

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = Number(coin.replace("p", ""));
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
