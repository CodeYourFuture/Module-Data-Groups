/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

test("given an array with one number, return that number", () => {
  expect(sum([5])).toEqual(5);
});

test("given an array with negative numbers, correctly return sum of numbers", () => {
  expect(sum([-10, -45, -6, -74])).toEqual(-135);
});

test("given an array with decimal numbers, correctly return total sum", () => {
  expect(sum([12.7, 3.6, 32.48, 8, 32.53])).toBeCloseTo(89.31);
});

test("given an array with some values that aren't numbers, throw an Error", () => {
  expect(() => {
    sum([10, 8, 32, "hello", 2, 53, 32]);
  }).toThrow(new Error("sum requires an array of numbers"));
});

test("given something that isn't an array, throw an Error", () => {
  expect(() => {
    sum("hello");
  }).toThrow(new Error("sum requires an array of numbers"));
});
