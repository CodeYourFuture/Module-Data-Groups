// totalTill takes an object representing coins in a till
// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds
function totalTill(till) {
  let total = 0;
  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin, 10);
    total += coinValue * quantity;
  }
  return `£${total / 100}`;
}

module.exports = totalTill;
