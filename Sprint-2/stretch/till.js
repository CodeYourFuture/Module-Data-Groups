// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const valueOfCoin = Number(coin.slice(0, -1));
    total += valueOfCoin * quantity;
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

const assertEquals = (actual, expected) => {
  console.assert(
    actual === expected,
    `Received ${actual} but expected ${expected}.`
  );
};

// a) What is the target output when totalTill is called with the till object
// £4.4

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// to iterate in an object and access the [key, value] pair

// c) What does coin * quantity evaluate to inside the for...of loop?
// it multiplies keys and values of till

// d) Write a test for this function to check it works and then fix the implementation of totalTill
assertEquals(totalAmount, "£4.40");
