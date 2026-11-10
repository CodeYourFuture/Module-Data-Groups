// totalTill takes an object representing coins in a till
//
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

module.exports = totalTill;

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

// a) Target output when totalTill is called with the till object above:
//    "£3.4"
//    Calculation: (10*1) + (6*5) + (4*50) + (10*20) = 10 + 30 + 200 + 200 = 340 pence
//    340 / 100 = 3.4 → "£3.4"

// b) Object.entries(till) turns the object into an array of [key, value] pairs
//    e.g. [["1p", 10], ["5p", 6], ...].
//    for...of needs something iterable; Object.entries lets us read both the
//    coin label and its quantity in each iteration.

// c) Before the fix: coin * quantity was "1p" * 10 (string * number) → NaN.
//    After the fix: valueInPence * quantity is e.g. 1 * 10, 5 * 6, 50 * 4, 20 * 10
//    (numbers only), and those products are added into total.

// d) Example test (till.test.js):
//
//    const totalTill = require("./till.js");
//
//    test("sums coins in the till as pounds", () => {
//      expect(
//        totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 })
//      ).toBe("£3.4");
//    });
