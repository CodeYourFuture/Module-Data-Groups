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
test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
  expect(sum([20])).toEqual(20);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([20, -10, 30, -15])).toEqual(25);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([1.2, 1.75, 3.03, 1.5])).toEqual(7.48);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, returns the sum of only the numerical elements", () => {
  expect(sum([10, "peter", "March", 15, 50])).toEqual(75);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns the the least surprising value given how it behaves for all other inputs", () => {
  expect(sum(["Mr", "Peter", "was", "born", "in", "May"])).toEqual("Mr Peter was born in May");
});