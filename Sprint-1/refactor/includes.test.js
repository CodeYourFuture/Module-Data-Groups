// Refactored version of includes should still pass the tests below:

const includes = require("./includes.js");

// Given an array containing the target value
// When passed to the includes function
// Then it should return true
test("returns true when target is in array", () => {
  const currentOutput = includes(["a", "b", "c", "d"], "c");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array that does not contain the target value
// When passed to the includes function
// Then it should return false
test("returns false when target not in array", () => {
  const currentOutput = includes([1, 2, 3, 4], "a");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array where the target appears more than once
// When passed to the includes function
// Then it should still return true
test("returns true when the target is in array multiple times", () => {
  const currentOutput = includes([1, 2, 2, 3], 2);
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an empty array
// When passed to the includes function
// Then it should return false
test("returns false for empty array", () => {
  const currentOutput = includes([]);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing null as an element
// When passed to the includes function with null as the target
// Then it should return true
test("searches for null", () => {
  const currentOutput = includes(["b", "z", null, "a"], null);
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});
