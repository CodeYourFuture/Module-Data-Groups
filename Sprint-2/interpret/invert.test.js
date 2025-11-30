const invert = require("./invert.js");

test("inverts a two-key object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts a single-key object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
