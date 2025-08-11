const totalTill = require("./till.js");

describe("totalTill()", () => {
test('calculates the total for given coins', () => {
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };

  expect(totalTill(till)).toBe('£4.40');
});

test('returns £0.00 when all coin quantities are zero', () => {
  const till = {
    "1p": 0,
    "5p": 0,
    "50p": 0,
    "20p": 0,
  };

  expect(totalTill(till)).toBe('£0.00');
});

test('calculates total for larger quantities of coins', () => {
  const till = {
    "1p": 1000,
    "5p": 500,
    "50p": 200,
    "20p": 150,
  };

  expect(totalTill(till)).toBe('£165.00');
});

});