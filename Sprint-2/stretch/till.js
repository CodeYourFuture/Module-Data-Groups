// totalTill takes an object representing coins in a till

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }

  return `£${total / 100}`;
}

// a) The target output is £4.4

// b) Object.entries converts the object into key-value pairs,
//    allowing us to access both the coin and its quantity.

// c) coinValue * quantity calculates the total value
//    of that type of coin.

module.exports = totalTill;