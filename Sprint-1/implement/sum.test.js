const sum = require("./sum.js");


test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});


test("given an array with just one number, returns that number", () => {
  expect(sum([42])).toBe(42);
});


test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([-10, 20, -30, 40])).toBe(20);
});


test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
});


test("given an array containing non-number values, ignores non-numerical values and returns the sum", () => {
  expect(sum(["hello", 10, true, 20, null, 30])).toBe(60);
});


test("given an array with only non-number values, returns 0", () => {
  expect(sum(["hello", true, null, undefined])).toBe(0);
});

