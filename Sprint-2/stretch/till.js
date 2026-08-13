// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

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

// a) What is the target output when totalTill is called with the till object
"£1.20";

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Object.entries() allows us to get both the coin and its quantity from the till object

// c) What does coin * quantity evaluate to inside the for...of loop?
// It evaluates to the total value of that particular coin type in pence

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// test function

test("totalTill returns the correct total", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe("£4.40");
});

// fixed implementation

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}
// the important fix 
const coinValue = parseInt(coin);