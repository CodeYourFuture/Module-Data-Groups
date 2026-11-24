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


test("Given an empty array, it should returns 0", () => {
  expect(sum([])).toBe(0);
});


// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("Given an array with just one number, it should return that number", () => {
  expect(sum([100])).toBe(100);
});


// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("Given an array containing negative numbers, it should rstill return the correct total sum", () => {
  expect(sum([-1,-2,-3,-4,-200])).toBe(-210);
});



// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("Given an array with decimal/float numbers, it should still return the correct total sum", () => {
  expect(sum([3.1, 74.6, 9.87, 204.33, 19.5])).toBe(311.4);
});



// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")



test("Given an array containing a value that isn't a number it should throw Error('sum requires an array of numbers')", () => {
  expect(() => sum([3.1, 74.6, '44', 204.33, 19.5])).toThrow(
    "sum requires an array of numbers"
  );
});


// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")

test("Given something that isn't an array at all, such as 'hey', 42 or no argumentshould throw Error('sum requires an array of numbers')", () => {
  expect(() => sum('hey')).toThrow(
    "sum requires an array of numbers"
  );
});
