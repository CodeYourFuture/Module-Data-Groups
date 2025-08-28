// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinWithoutP = coin.slice(0, coin.length -1);
    const coinValue = Number(coinWithoutP);
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
// const totalAmount = totalTill(till);
// console.log(totalAmount)

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
      // £4.40

// ---------------------------------------------------------------------------------------
// b) Why do we need to use Object.entries inside the for...of loop in this function?
      // to convert the object to an array with key-value pairs, then do iterate on each pair with loop.

// ---------------------------------------------------------------------------------------
// c) What does coin * quantity evaluate to inside the for...of loop?
      // already evaluate to 'Nan', because of 'num (quantity)' to 'str (coin)' multiplication. (was Wrong)
      // As we slice "p" off, coin * quantity evaluates to a number because coin is a numeric string (LIKE: "1", "5", "50"), and JavaScript implicitly converts it to a number during the multiplication.

// ---------------------------------------------------------------------------------------
// d) Write a test for this function to check it works and then fix the implementation of totalTill

test("check totalTill output", () => {
  expect(totalTill(till)).toBe("£4.40");
});