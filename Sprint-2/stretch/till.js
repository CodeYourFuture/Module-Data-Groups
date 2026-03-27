// totalTill takes an object representing coins in a till
// Given an object of coins (e.g. { '1p': 10, '50p': 4 })
// it returns the total amount as a formatted pounds string (e.g. '£4.40').

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // Convert a label like '50p' -> 50 (pence)
    const pence = parseInt(String(coin).replace(/p$/i, ""), 10);
    if (Number.isFinite(pence) && typeof quantity === "number") {
      total += pence * quantity;
    }
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;
