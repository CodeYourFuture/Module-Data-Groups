const invert = require("./invert.js");

test("Given an empty object, return an empty object", () => {
  expect(invert({})).toEqual({});
});

test("Given a single key-value pair object, returns a swap value", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
