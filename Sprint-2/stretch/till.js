/*
  totalTill takes an object representing coins in a till

  a) What is the target output when totalTill is called with the till object?

    For the example till:
    {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    }

    The total value in pence is:
    (1 * 10) + (5 * 6) + (50 * 4) + (20 * 10) = 10 + 30 + 200 + 200 = 440 pence
    Which is £4.40 when converted to pounds.

  b) Why do we need to use Object.entries inside the for...of loop in this function?

    Object.entries returns an array of [key, value] pairs from the till object.
    We need this to loop over each coin type (key) and its quantity (value) to calculate total.

  c) What does coin * quantity evaluate to inside the for...of loop?

    coin is a string like "1p" so directly multiplying it by quantity results in NaN.
    We need to extract the numeric value from the coin string before multiplying.

  d) Write a test for this function to check it works and then fix the implementation of totalTill
*/

// Fixed implementation

function totalTill(till) {
  // Mapping coin strings to their numeric values in pence
  const coinValues = {
    "1p": 1,
    "2p": 2,
    "5p": 5,
    "10p": 10,
    "20p": 20,
    "50p": 50,
    "£1": 100,
    "£2": 200,
  };

  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = coinValues[coin];
    if (coinValue !== undefined) {
      total += coinValue * quantity;
    }
  }

  // Convert pence to pounds and format to 2 decimal places
  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

