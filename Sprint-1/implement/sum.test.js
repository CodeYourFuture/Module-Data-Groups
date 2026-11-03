/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given one number, returns it", () => {
  expect(sum([5])).toBe(5);
});

test("given negative numbers, returns the correct total", () => {
  expect(sum([10, -30, 5])).toBe(-15);
});

test("given decimals, returns the correct total", () => {
  expect(sum([0.5, 0.25, 1])).toBe(1.75);
});

test("throws if an element isn't a number", () => {
  expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

test("throws if not an array", () => {
  for (const bad of ["hey", 42, undefined, null, {}]) {
    expect(() => sum(bad)).toThrow(new Error("sum requires an array of numbers"));
  }
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
