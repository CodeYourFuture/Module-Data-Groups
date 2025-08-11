// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // const coinValue = Number(coin.slice(0, -1));
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }

  const totalStr = total.toString().padStart(3, "0");
  const pound = totalStr.slice(0, -2);
  const pence = totalStr.slice(-2);

  return `£${pound}.${pence}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

const totalAmount = totalTill(till);

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Both the key and the value are used in calculating the total

// c) What does coin * quantity evaluate to inside the for...of loop?
// It evaluates the total amount for a particular coin in the till

// d) Write a test for this function to check it works and then fix the implementation of totalTill
