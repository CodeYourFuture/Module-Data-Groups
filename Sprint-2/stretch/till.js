function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Removes the 'p' from the coin string and converts it to a number
    const coinValue = parseInt(coin);  // Converts the coin value to a number
    total += coinValue * quantity;  // Calculates the total in pence
  }

  return `£${(total / 100).toFixed(2)}`;  // Converts to pounds and formats to two decimal places
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};

const totalAmount = totalTill(till);
console.log(totalAmount); // Expected output: £4.40
