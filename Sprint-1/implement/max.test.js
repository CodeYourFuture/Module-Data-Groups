/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("max()", () => {
  it("returns -Infinity for empty array", () =>
    expect(findMax([])).toBe(-Infinity));

  [
    { input: [43], expected: 43 },
    { input: [342], expected: 342 },
    { input: [65455453], expected: 65455453 },
  ].forEach(({ input, expected }) =>
    it("returns the only number in array with one number", () =>
      expect(findMax(input)).toBe(expected))
  );

  [
    { input: [43, -4], expected: 43 },
    { input: [342, -45, -768, 23], expected: 342 },
    { input: [65455453, -54666, -4566, 6565], expected: 65455453 },
  ].forEach(({ input, expected }) =>
    it("returns the largest number in array containing negative numbers", () =>
      expect(findMax(input)).toBe(expected))
  );

  [
    { input: [-43, -4], expected: -4 },
    { input: [-342, -45, -768, -23], expected: -23 },
    { input: [-65455453, -54666, -4566, -6565], expected: -4566 },
  ].forEach(({ input, expected }) =>
    it("returns closes number to zero in an array with only negative numbers", () =>
      expect(findMax(input)).toBe(expected))
  );

  [
    { input: [43.32, -4.1], expected: 43.32 },
    { input: [342.54, -45.12, -768.76, 23.99], expected: 342.54 },
    {
      input: [65455453.4533, -54666.222, -4566.322, 6565.43],
      expected: 65455453.4533,
    },
  ].forEach(({ input, expected }) =>
    it("returns the largest decimal number in an array with numbers", () =>
      expect(findMax(input)).toBe(expected))
  );

  [
    { input: [1, 2, "3", null, undefined, 4], expected: 4 },
    { input: ["apple", 1, 2, 34, "banana", 4], expected: 34 },
    { input: [1, "2", 3, "4", 5], expected: 5 },
    { input: [1, "apple", 2, null, 3, undefined, 4], expected: 4 },
    { input: [3, "apple", 1, null, 2, undefined, 4, 54], expected: 54 },
    { input: ["banana", 5, 3, "apple", 1, 4, 2], expected: 5 },
  ].forEach(({ input, expected }) =>
    it("returns max of numbers in an array containing non-numeric values", () =>
      expect(findMax(input)).toEqual(expected))
  );

  [
    ["not an array", "3", null, undefined],
    ["apple", "banana"],
    ["apple", null, undefined],
    ["banana", {}],
  ].forEach((input) =>
    it("returns -Infinity in array with only non-numeric values", () =>
      expect(findMax(input)).toBe(-Infinity))
  );
});
