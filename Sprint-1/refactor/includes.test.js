// Refactored version of includes should still pass the tests below:

const includes = require("./includes");

test("returns true when target is in array", () => {
  const currentOutput = includes(["a", "b", "c", "d"], "c");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false when target not in array", () => {
  const currentOutput = includes([1, 2, 3, 4], "a");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns true when the target is in array multiple times", () => {
  const currentOutput = includes([1, 2, 2, 3], 2);
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false for empty array", () => {
  const currentOutput = includes([]);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("searches for null", () => {
  const currentOutput = includes(["b", "z", null, "a"], null);
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});
