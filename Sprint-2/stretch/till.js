// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    // coin is like "1p" or "50p"; strip non-digits and parse to integer pence
    const pence = parseInt(String(coin).replace(/\D+/g, ''), 10);
    if (!Number.isFinite(pence)) continue;
    if (typeof quantity !== 'number') continue;

    total += pence * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
//Expected total in pounds: calculate coins in pence -> (1p * 10) + (5p * 6) + (50p * 4) + (20p * 10)
//1*10 = 10
//5*6 = 30
//50*4 = 200
//20*10 = 200
//Total pence = 440 -> £4.40
//So target output string: "£4.40"

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// It gives [key, value] pairs so the loop can access both coin quantity directly without separate lookups.

// c) What does coin * quantity evaluate to inside the for...of loop?
// coin * quantity evaluates evaluates to NaN because '1p' cannot be coerced to a number

// d) Write a test for this function to check it works and then fix the implementation of totalTill
const totalTill = require('./till');

test('calculates total for sample till', () => {
  const till = { '1p': 10, '5p': 6, '50p': 4, '20p': 10};
  expect(totalTill(till)).toBe('£4.40');
});

test('empty till returns £0.00', () => {
  expect(totalTill({})).toBe('£0.00');
});

test('ignores invalid coin labels and quantities', () => {
  const till = { '1p': 5, 'abc': 10, '10p': 'x', '20p': 3};
  expect(totalTill(till)).toBe('£0.65');
})