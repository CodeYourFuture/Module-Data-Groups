const doubleAllNumbers = require("./doubleNumber.js");

test("doubles [10, 20, 30] to [20, 40, 60]", () => {
  const input = [10, 20, 30];
  const result = doubleAllNumbers(input);
  const expected = [20, 40, 60];

  expect(result).toEqual(expected);
});

test("works with negative numbers", () => {
  const input = [-5, -10, 15]; // ← This is ONLY for the test
  const result = doubleAllNumbers(input);
  const expected = [-10, -20, 30];
  expect(result).toEqual(expected);
});
