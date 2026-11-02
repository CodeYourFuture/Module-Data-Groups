/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

test("given an array with one number, returns that number", () => {
  expect(sum([100])).toEqual(100);
});
test("given an array with just negative numbers, returns the correct total sum", () => {
  expect(sum([-7, -2, -13, -121, -1345])).toEqual(-1488);
});

test("given an array with decimal numbers, returns the correct total sum", () => {
  expect(sum([0.1, 1.2, 23.67, 0.0012, 467.89])).toEqual(492.8612);
});

test("given an array containing a value that isn't a number, throw Error", () => {
  expect(sum([48, 288, "hi", 576])).toThrow(
    new Error("sum requires an array of numbers")
  );
});
test("given something that isn't an array, throw Error", () => {
  expect(sum("This is a string")).toThrow(
    new Error("sum requires an array of numbers")
  );
});
