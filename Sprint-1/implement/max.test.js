const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([42])).toEqual(42);
});

test("given an array with positive and negative numbers, returns the largest overall", () => {
  expect(findMax([-5, 10, -20, 3])).toEqual(10);
});

test("given an array with only negative numbers, returns the closest to zero", () => {
  expect(findMax([-5, -1, -10])).toEqual(-1);
});

test("given an array with decimal numbers, returns the largest decimal", () => {
  expect(findMax([1.5, 2.75, 2.5])).toEqual(2.75);
});

test("given an array with non-number values, ignores them and returns the max", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
});

test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["hey", "hi", "hello"])).toEqual(-Infinity);
});
