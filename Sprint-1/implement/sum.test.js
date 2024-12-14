/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("for an empty array should return 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("for an array with one number should return that number", () => {
  expect(sum([4])).toBe(4);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("for an array with negative numbers should return sum of them", () => {
  expect(sum([-5, -9, -4, -10])).toBe(-28);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("for an array with decimal numbers should return sum of them", () => {
  expect(sum([5.2, 1.9, 8.3])).toEqual(15.4);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("if the array has non-numerical values inside, it should ignore them and just add up the numbers", () => {
  expect(sum(["hi", 5, 4, 3, "NO"])).toBe(12);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("array with only non-number values will add up the ASCII of the values!", () => {
  expect(sum(["hi", "bye", "hello"])).toBe(0);
});
test("array with only non-number values will add up the ASCII of the values!", () => {
  expect(sum([undefined])).toBe(0);
});
test("array with only non-number values will add up the ASCII of the values!", () => {
  expect(sum([])).toBe(0);
});
test("array with only non-number values will add up the ASCII of the values!", () => {
  expect(sum([true])).toBe(0);
});
test("array with decimals number will return the sum with 2 decimal points", () => {
  expect(sum([1.1, 1.1, 1.1])).toBeCloseTo(3.3, 2);
});

