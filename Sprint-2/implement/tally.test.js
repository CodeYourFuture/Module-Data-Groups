const tally = require("./tally.js");

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally counts items correctly", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws error for invalid input", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
  expect(() => tally(null)).toThrow("Input must be an array");
  expect(() => tally(123)).toThrow("Input must be an array");
});

