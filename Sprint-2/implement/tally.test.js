const tally = require("./tally.js");

// Test 1: Tally on an empty array returns an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Test 2: Tally on an array with duplicate items
test("tally on an array with duplicate items", () => {
  expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
});

// Test 3: Tally on an array with a single item
test("tally on an array with a single item", () => {
  expect(tally(['a'])).toEqual({ a: 1 });
});

// Test 4: Tally on an array with all identical items
test("tally on an array with all identical items", () => {
  expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
});

// Test 5: Tally on invalid input (string)
test("tally on invalid input throws an error", () => {
  expect(() => tally("invalid")).toThrow("Invalid input: Expected an array");
});