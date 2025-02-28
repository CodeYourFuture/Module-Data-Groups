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
}*/
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }
  let newTot = (total / 100).toFixed(2);
  return `£${newTot}`;
}
const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
//undefined since it is operating on string and number without changing the key to number.
// b) Why do we need to use Object.entries inside the for...of loop in this function?
//to change till to array with array element with key value pair
// c) What does coin * quantity evaluate to inside the for...of loop?
//it multiply the key and value.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
// test written in till.test.js and it failed i.e does nt work
