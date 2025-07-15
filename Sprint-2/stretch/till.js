// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    let coinValue = Number(coin.slice(0, -1)); // to calculate total we need number value not string
    total += coinValue * quantity;
  }
  // to have proper format it is better to calculate pounds and pence separately
  let pounds = parseInt(total / 100);
  let pence = total % 100;

  return `£${pounds}.${pence.toString().padEnd(2, "0")}`;
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
// in order to calculate we have to know nominal of each coin type, which is property name

// c) What does coin * quantity evaluate to inside the for...of loop?
// multiples value of coin times its quantity

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const currentOutput = totalTill(till);
const targetOutput = "£4.40";
console.assert(
  currentOutput == targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
