const invert = require("./invert.js");
// writing some tests.
// Given an simple ordinary object.
test("invert on a simple object returns the correct inverted object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
// Given an object with multiple key value pairs.
test("invert on an object with multiple key value pairs returns the correct inverted object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});
// Given an object with duplicate values.
test("invert on an object with duplicate values returns the correct inverted object", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "a", 1: "b" });
});
// Given an empty object.
test("invert on an empty object returns an empty object", () => {
  expect(invert({})).toEqual({});
});
// Given an invalid input like a string.
test("invert on an invalid input like a string returns an empty object", () => {
  expect(invert("invalid")).toEqual({});
});

// Given an invalid input like a number.
test("invert on an invalid input like a number returns an empty object", () => {
  expect(invert(123)).toEqual({});
});
// Given an invalid input like an array.
test("invert on an invalid input like an array returns an empty object", () => {
  expect(invert([1, 2, 3])).toEqual({});
});
// Given an invalid input like null or undefined.
test("invert on an invalid input like null or undefined returns an empty object", () => {
  expect(invert(null)).toEqual({});
  expect(invert(undefined)).toEqual({});
});
