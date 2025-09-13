const invert = require("./invert.js");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("works with string values", () => {
  expect(invert({ x: "hello", y: "world" })).toEqual({
    hello: "x",
    world: "y",
  });
});

test("returns empty object when input is empty", () => {
  expect(invert({})).toEqual({});
});
