const invert = require("./invert.js");

// Empty object
test("invert on an empty object returns an empty object", () => {
  expect(invert({})).toEqual({});
});

// Basic objects
test("invert on basic object returns inverted properties object ", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

// Single property
test("invert on a single property object returns inverted key-value object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

// Multiple properties
test("invert on multiple properties object returns inverted properties object", () => {
  expect(invert({ 1: "a", 2: "b", 3: "c", 4: "d" })).toEqual({
    a: "1",
    b: "2",
    c: "3",
    d: "4",
  });
});

// String values
test("invert on string value object returns inverted key-value object", () => {
  expect(invert({ a: "hello" })).toEqual({ hello: "a" });
});

// Duplicate values
test("invert on duplicate values object return inverted object", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "a", 1: "b" });
});

// Invalid input
test("invert on invalid input returns invert requires a valid input", () => {
  expect(() => invert()).toThrow("invert requires a valid input");
});
