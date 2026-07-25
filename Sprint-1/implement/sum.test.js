const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

test("given an array with just one number, returns that number", () => {
  expect(sum([7])).toEqual(7);
});

test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([10, -5, 3])).toEqual(8);
});

test("given an array with decimal numbers, returns the correct total sum", () => {
  expect(sum([1.5, 2.25, 0.25])).toEqual(4);
});

test("given an array containing non-number values, ignores them and sums the rest", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toEqual(80);
});

test("given an array with only non-number values, returns 0", () => {
  expect(sum(["hey", "hi", "hello"])).toEqual(0);
});
