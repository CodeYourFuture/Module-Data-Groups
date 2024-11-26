// till.test.js
const totalTill = require('./till');

test("calculates the total amount of coins in pounds", () => {
  const till = [1, 50, 50, 1, 1]; // Valid input
  expect(totalTill(till)).toEqual("£1.03");
});

test("returns £0.00 for an empty till", () => {
  const till = []; // Empty array
  expect(totalTill(till)).toEqual("£0.00");
});

test("handles non-numeric coin values gracefully", () => {
  const till = [1, 50, "five", 50, 1, 1]; // Valid array with non-numeric value
  expect(totalTill(till)).toEqual("£1.03");
});

