// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += parseInt(coin, 10) * quantity;
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

// a) The target output is "£4.4" (440 pence).

// b) Object.entries provides iterable [coin, quantity] pairs from the object.

// c) The original coin * quantity evaluates to NaN because, for example,
// "1p" cannot be converted directly to a number.

module.exports = totalTill;
