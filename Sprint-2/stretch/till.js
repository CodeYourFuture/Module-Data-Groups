// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const formatedCoin = parseInt(coin);
    total += formatedCoin * quantity;
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

// a) What is the target output when totalTill is called with the till object
// Sum = 10 + 30 + 200 + 200 = 440p → £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//  it used to  convert the object into an array of key-value pairs.

// c) What does coin * quantity evaluate to inside the for...of loop?
// Coin is a string like "1p", "5p", etc. Multiplying a string that includes non-numeric characters by a number resulting into a NaN which is not a number.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const till1 = {
  "11p": 5,
  "7p": 4,
  "40p": 3,
  "80p": 1,
};

const expected1 = "£2.83";
const actual1 = totalTill(till1);
console.assert(
  actual1 === expected1,
  `Expected ${expected1} but got ${actual1}`
);

const till2 = {
  "21p": 9,
  "3p": 2,
  "9p": 9,
  "44p": 7,
};

const expected2 = "£5.84";
const actual2 = totalTill(till2);
console.assert(
  actual2 === expected2,
  `Expected ${expected2} but got ${actual2}`
);
