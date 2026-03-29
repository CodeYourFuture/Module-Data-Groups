const invert = require("./invert.js");

test("inverts single key", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts multiple keys", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("later keys win when values are duplicated", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});

test("empty object returns empty object", () => {
  expect(invert({})).toEqual({});
});
