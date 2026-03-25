const invert = require("./invert.js");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

test("inverts single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts empty object to empty object", () => {
  expect(invert({})).toEqual({});
});
