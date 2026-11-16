const invert = require("./invert.js");

test("given a key-value pair, should return it inverted", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("given multiple key-value pairs, should return them inverted", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("given an empty object, should return an empty object", () => {
  expect(invert({})).toEqual({});
});
