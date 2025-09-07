function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Remove the 'p' from the coin string and convert to number
    const coinValue = Number(coin.replace("p", ""));
    total += coinValue * quantity;
  }

  return `£${total / 100}`;
}

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object?

// Calculate total pence:

// 1p * 10 = 10p

// 5p * 6 = 30p

// 50p * 4 = 200p

// 20p * 10 = 200p

// Total = 10 + 30 + 200 + 200 = 440p = £4.40

// So, the target output is: "£4.4" or "£4.40".

// b) Why do we need to use Object.entries inside the for...of loop in this function?

// Because till is an object, Object.entries(till) gives an array of [key, value] pairs 
// (coin name and quantity), which lets us loop through both the coin type and quantity at the same time.

// c) What does coin * quantity evaluate to inside the for...of loop?

// coin is a string like "1p", "5p", etc.

// quantity is a number.

// Multiplying a string with a letter ("1p") by a number results in NaN because "1p" cannot be converted 
// directly to a number.