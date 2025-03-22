const invert = require("./invert");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts numeric keys and values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("inverts string keys and values", () => {
  expect(invert({ x: "apple", y: "banana" })).toEqual({
    apple: "x",
    banana: "y",
  });
});

test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});
