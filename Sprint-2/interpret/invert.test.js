const invert = require('./invert');
test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("handles string values", () => {
  expect(invert({ x: "orange", y: "grape" })).toEqual({
    orange: "x",
    grape: "y",
  });
});

test("returns empty object when input is empty", () => {
  expect(invert({})).toEqual({});
});

test("overwrites duplicate values (last key wins)", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});
