const sum = require("./sum.js");

test("given an empty array, it returns an empty array", () => {
  expect(sum([])).toEqual(0);
});

test("Given an array with just one number to the sum function Then it should return that number", () => {
  expect(sum([3])).toEqual(3);
});

test("given an array containing negative numbers to the sum function then it should return the correct total", () => {
  expect(sum([1, -1, -2, -3])).toEqual(-5);
});

test("given an array with decimal/float numbers should return the correct total sum", () => {
  expect(sum([2, 2.5])).toEqual(4.5);
});

test("given an  array non-number value should return the correct total of only the numeric ones", () => {
  expect(sum([2, "2", "a", "b", 3])).toEqual(5);
});

test("given an  array non-number value should return 0", () => {
  expect(sum(["a", "c", "f", "3"])).toEqual(0);
});
