const invert = require("./invert");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts string values", () => {
  expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
});

test("overwrites keys when values are not unique", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" }); // last one wins
});

test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});
