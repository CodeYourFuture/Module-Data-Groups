// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;
if (typeof till !== "object" || Array.isArray(till) || till === null) {
  throw new Error("Input must be an object");
}
  for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = Number(coin.replace("p", ""));
    total += valueInPence * quantity;
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

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//Object.entries() is used to loop over both the keys and values of an object

// c) What does coin * quantity evaluate to inside the for...of loop?
//  coin * quantity evaluates to Nan(Not A Number)

// d) Write a test for this function to check it works and then fix the implementation of totalTill

module.exports = totalTill;
