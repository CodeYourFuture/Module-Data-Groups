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

test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

test("given an array with one number, returns that number", () => {
  expect(sum([8])).toEqual(8);
});

test("given negative numbers, returns the correct total", () => {
  expect(sum([-10, 40, 50])).toEqual(80);
});

test("given decimal numbers, returns the correct total", () => {
  expect(sum([1.5, 2.25, 3.25])).toEqual(7);
});

test("throws when the array contains a value that isn't a number", () => {
  expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

test("throws when given a string", () => {
  expect(() => sum("hey")).toThrow(
    new Error("sum requires an array of numbers")
  );
});

test("throws when given a number", () => {
  expect(() => sum(42)).toThrow(
    new Error("sum requires an array of numbers")
  );
});

test("throws when called with no argument", () => {
  expect(() => sum()).toThrow(
    new Error("sum requires an array of numbers")
  );
});
