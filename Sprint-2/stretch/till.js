// totalTill takes an object representing coins in a till


// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds


function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = Number(coin.replace("p", ""));
    total += valueInPence * quantity;
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
// "£4.4"


// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries returns [coin, quantity] pairs, allowing destructuring in the loop


// c) What does coin * quantity evaluate to inside the for...of loop?
// Original: "1p" * 10 = NaN. Fixed: 1 * 10 = 10 (pence for that coin type)


module.exports = totalTill;
