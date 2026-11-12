const invert = require("./invert.js");

// inverting original input
test("Inverting original input of 1 property", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

// inverting original input of 2 objects and 2 properties
test("Inverting original input of 2 properties", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

// inverting an empty object
test("Inverting original input correctly", () => {
  expect(invert({})).toEqual({});
});

// Inverting an object with an empty string as a value
test("Inverting an object with an empty string as a value", () => {
  expect(invert({ a: "" })).toEqual({ "": "a" });
});

// Inverting an object with an empty string as a key
test("Inverting an object with an empty string as a key", () => {
  expect(invert({ "": 1 })).toEqual({ 1: "" });
});

// Inverting an object with multiple properties sharing the same value
test("Inverting an object with multiple properties sharing the same value", () => {
  expect(invert({ a: 2, b: 2, c: 2 })).toEqual({ 2: "a", 2: "b", 2: "c" });
});
