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
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given one element in an array, returns that number", () => {
  expect(sum([7])).toEqual(7);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given negative elements in an array, returns sum of negative numbers", () => {
  expect(sum([-1, -4, -7, -3])).toEqual(-15);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given decimal elements in an array, returns sum of decimal numbers", () => {
  expect(sum([1.0, 4.4, 2.7, 0.6])).toBeCloseTo(8.7);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws error when elements of an array are not numbers", () => {
  expect(() => {
    sum(["hi", 7, "hello", "10"]);
  }).toThrow(new Error("sum requires an array of numbers"));
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws error when parameter is not an array", () => {
  expect(() => {
    sum("hello");
  }).toThrow(new Error("sum requires an array of numbers"));
});
