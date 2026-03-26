const invert = require("./invert.js");

/**
 * invert function tests
 * These tests verify that keys and values are swapped correctly.
 * They also confirm that 'collisions' (where two keys share a value)
 * result in an array of keys to prevent data loss.
 */

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts object with different values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({
    "10": "x",
    "20": "y",
  });
});

test("handles duplicate values (Collision)", () => {
  // Verifies that a single value found twice becomes an array
  expect(invert({ a: 1, b: 1 })).toEqual({
    "1": ["a", "b"],
  });
});

test("handles multiple duplicate values (Triple Collision)", () => {
  // Verifies that three keys sharing a value are all captured
  expect(invert({ a: 1, b: 1, c: 1 })).toEqual({
    "1": ["a", "b", "c"],
  });
});