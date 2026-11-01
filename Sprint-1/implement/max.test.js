const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([7])).toBe(7);
});

test("returns the largest of positive and negative numbers", () => {
  expect(findMax([-6, 5, -3, 8])).toBe(8);
});

test("returns the closest to zero for all negatives", () => {
  expect(findMax([-9, -2, -6])).toBe(-2);
});

test("returns the largest decimal number", () => {
  expect(findMax([1.2, 3.8, 2.6])).toBe(3.8);
});

test("throws for an array containing a non-number", () => {
  expect(() => findMax(["hey", 10])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("throws when not given an array", () => {
  expect(() => findMax("hey")).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
