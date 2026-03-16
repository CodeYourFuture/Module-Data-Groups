/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  it("0 should be return when an empty array is passed", () =>
    expect(sum([])).toEqual(0));

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  [[1], [22], [-29], [0]].forEach((input) =>
    it(`an array with just one number [${input}] should return that number`, () =>
      expect(sum(input)).toEqual(input[0]))
  );

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  [
    { input: [-1, -2, -100], expected: -103 },
    { input: [-26, 0, -90], expected: -116 },
    { input: [20, -20, 0, 45], expected: 45 },
  ].forEach(({ input, expected }) =>
    it(`array containing negative numbers [${input}] should return the correct sum`, () =>
      expect(sum(input)).toEqual(expected))
  );

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  [
    { input: [1.1, 2.222, 100.001], expected: 103.32300000000001 },
    { input: [26.55, 0.001, -90.34], expected: -63.789 },
    { input: [-0.01, 45.9], expected: 45.89 },
  ].forEach(({ input, expected }) =>
    it(`array containing decimal/float numbers [${input}] should return the correct sum`, () =>
      expect(sum(input)).toEqual(expected))
  );
  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  [
    {
      input: [1.1, "what", 2.222, "is", "this???", "  ", 100.001],
      expected: 103.32300000000001,
    },
    { input: [26.55, "Okay", "!!", 0.001, -90.34], expected: -63.789 },
    { input: [1, "12", 45], expected: 46 },
  ].forEach(({ input, expected }) =>
    it(`array containing non-number values [${input}] should ignore them and return the correct sum of numbers in it`, () =>
      expect(sum(input)).toEqual(expected))
  );

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  [
    {
      input: ["what", "is", "this???", "  "],
      expected: 0,
    },
    { input: ["26.55", "Okay", "!!"], expected: 0 },
    { input: ["write", "whatever", "%-959"], expected: 0 },
  ].forEach(({ input, expected }) =>
    it(`array containing only non-number values [${input}] should should return 0`, () =>
      expect(sum(input)).toEqual(expected))
  );
});
