const tally = require("./tally.js");

// Test 1: empty array should return empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Test 2: array with single item
test("counts a single item", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

// Test 3: array with multiple duplicates
test("counts duplicates correctly", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

// Test 4: array with multiple unique items
test("counts multiple unique items correctly", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Test 5: invalid input should throw an error
test("throws an error if input is not an array", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
});
