// totalTill takes an object representing coins in a till
// Given an object of coins (e.g. { '1p': 10, '50p': 4 })
// it returns the total amount as a formatted pounds string (e.g. '£4.40').

/*
a) What is the target output when totalTill is called with the till object?
  - The target output is "£4.40". (1p×10 = 10p, 5p×6 = 30p, 50p×4 = 200p, 20p×10 = 200p; total = 440p → £4.40)

b) Why do we need to use Object.entries inside the for...of loop in this function?
  - Object.entries(till) yields pairs [key, value], so we get the coin label (e.g. "50p") and the quantity
    in one step. That makes the loop concise and avoids extra lookups like till[key]. It also restricts
    iteration to the object's own enumerable properties.

c) What does coin * quantity evaluate to inside the for...of loop?
  - As written (if you don't convert the coin label), coin is a string like "1p" and coin * quantity
    evaluates to NaN. You must parse the numeric pence value from the coin label before multiplying.

d) Write a test for this function to check it works and then fix the implementation of totalTill
  - Example Jest tests live in `Sprint-2/stretch/till.test.js` and assert the sample till returns
    "£4.40" and an empty till returns "£0.00". The implementation should parse labels (strip trailing
    'p') and accumulate pence, then format as pounds to two decimal places.
*/

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
