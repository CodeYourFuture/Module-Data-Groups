const invert = require("./invert.js");

// inverting original input
test("Inverting original input correctly", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

// inverting original input of 2 objects and 2 properties
test("Inverting original input correctly", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

// inverting an empty object
test("Inverting original input correctly", () => {
  expect(invert({})).toEqual({});
});

// inverting an object with an empty string as a key
test("Inverting original input correctly", () => {
  expect(invert({ a: "" })).toEqual({ "": "a" });
});

// inverting an empty object with an string as a key
test("Inverting original input correctly", () => {
  expect(invert({ "": 1 })).toEqual({ 1: "" });
});
