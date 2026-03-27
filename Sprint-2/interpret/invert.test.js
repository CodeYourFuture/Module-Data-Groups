const invert = require("./invert.js");

// Test 1 swaps the keys and values
test("invert swaps keys and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

// Test 2 empty object should return empty object
test("invert on an empty object returns an empty object", () => {
  expect(invert({})).toEqual({});
});

// Test 3 single key value pair
test("invert works with a single pair", () => {
    expect(invert({ x: 10 })).toEqual({ "10": "x" });
});