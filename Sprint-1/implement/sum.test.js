/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum()", () => {
  it("returns 0 for empty array", () => expect(sum([])).toBeCloseTo(0));

  [
    { input: [4], expected: 4 },
    { input: [367], expected: 367 },
    { input: [7958463], expected: 7958463 },
  ].forEach(({ input, expected }) => {
    it(`returns the sum for arrays with one number`, () =>
      expect(sum(input)).toBeCloseTo(expected));
  });

  [
    { input: [-9], expected: -9 },
    { input: [-367, -5], expected: -372 },
    { input: [-7958463, -100, -202, -6453], expected: -7965218 },
  ].forEach(({ input, expected }) =>
    it("returns the correct sum for array with only negative values", () =>
      expect(sum(input)).toBeCloseTo(expected))
  );

  [
    { input: [-9, 9], expected: 0 },
    { input: [-367, -5, 70, 2], expected: -300 },
    { input: [-7958463, -100, -202, -6453, 153, 45621], expected: -7919444 },
  ].forEach(({ input, expected }) =>
    it("returns the correct sum for array containing negative numbers", () =>
      expect(sum(input)).toBeCloseTo(expected))
  );

  [
    { input: [-9, 9, 0.1], expected: 0.1 },
    { input: [-367, -5, 70, 2, -4.567], expected: -304.567 },
    {
      input: [-7958463, -100, -202, -6453, 153, 45621, -1.48, 8976.456],
      expected: -7910469.024,
    },
  ].forEach(({ input, expected }) =>
    it("returns the correct sum for array containing decimal/float numbers", () =>
      expect(sum(input)).toBeCloseTo(expected))
  );

  [
    { input: [-9, 9, 0.1, () => {}, undefined], expected: 0.1 },
    {
      input: [-367, -5, "-234", 70, 2, null, { fruit: "apple" }, -4.567],
      expected: -304.567,
    },
    { input: [Infinity, -Infinity, 1, , NaN, 10, -9], expected: 2 },
    {
      input: [
        NaN,
        -7958463,
        -100,
        "Iran",
        -202,
        -6453,
        "UK",
        153,
        [],
        45621,
        "Egypt",
        -1.48,
        8976.456,
        {},
      ],
      expected: -7910469.024,
    },
  ].forEach(({ input, expected }) =>
    it("returns the correct sum for array containing finite and infinite values", () =>
      expect(sum(input)).toBeCloseTo(expected))
  );

  [
    ["not an array", null, undefined, {}, []],
    [("apple", null, undefined)],
  ].forEach((item) =>
    it("returns 0 for arrays with only non-number values", () =>
      expect(sum(item)).toBeCloseTo(0))
  );
});
