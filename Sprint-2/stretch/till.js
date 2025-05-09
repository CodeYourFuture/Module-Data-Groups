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

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// c) What does coin * quantity evaluate to inside the for...of loop?

// d) Write a test for this function to check it works and then fix the implementation of totalTill




//MY RESPONSE:

// Function to calculate the total amount in pounds

function totalTill(till) {
  let total = 0;

  // Iterating through the till object to calculate the total amount
  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity; // This will fail since `coin` is a string (e.g. "1p")
  }

  return `£${total / 100}`; // Return total in pounds, formatted with a pound symbol
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object?
// Target output: The total amount should be calculated by summing up the total value of coins in the till, 
// expressed in pounds. The output for this input should be:
// £2.20

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// We use `Object.entries(till)` to get an array of key-value pairs, where each key is the coin value (e.g., "1p") 
// and each value is the quantity of that coin. This allows us to loop through both the coin type and its quantity 
// to calculate the total amount in the till.


// c) What does coin * quantity evaluate to inside the for...of loop?
// `coin * quantity` currently evaluates to a string multiplied by a number, which will result in `NaN`.
// For example, "1p" * 10 will return `NaN`, because `"1p"` is a string and cannot be directly multiplied with a number.
// The correct approach is to extract the numerical part of the coin value (e.g., "1p" → 1) and perform the multiplication.


// d) Write a test for this function to check it works and then fix the implementation of totalTill

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin); // Extract the numeric part of the coin string
    total += coinValue * quantity; // Correctly multiply the numeric coin value with the quantity
  }

  return `£${total / 100}`; // Return total in pounds
}

// Test case to check the function
test("totalTill calculates the total amount correctly", () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  
  expect(totalTill(till)).toBe("£2.20"); // The total value is 2.20 pounds
});
