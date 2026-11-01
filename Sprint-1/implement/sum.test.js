const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given an array with one number, return that number", () => {
  expect(sum([8])).toBe(8);
});

test("adds negative number correctly", () => {
  expect(sum([-5, 3, -10])).toBe(-12);
});

test("adds decimal numbers correctly", () => {
  expect(sum([1.5, 2.25, 3])).toBe(6.75);
});

test("throws for an array containing a non-number", () => {
  expect(() => sum(["hey", 10])).toThrow("sum requires an array of numbers");
});

test("throws when not given an array", () => {
  expect(() => sum("hey")).toThrow(
    new Error("sum requires an array of numbers")
  );
});
