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
("£4.40");

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We use Object.entries() to convert the object into key-value pairs so we can loop through each coin type and its quantity using a for...of loop.

// c) What does coin * quantity evaluate to inside the for...of loop?
//It calculates the total value in pence for each coin type.

//"1p" * 10 = 10
//"50p" * 4 = 200

// So it gives the total pence for each coin type.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
Eg: test("calculates total till value correctly", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toEqual("£4.40");
});
//then fix the implementation of totalTill
function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const value = parseInt(coin);
    total += value * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}
