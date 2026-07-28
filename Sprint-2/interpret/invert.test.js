const invert = require("./invert.js");

test("swaps the keys and values in an object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("returns an empty object for an empty object", () => {
  expect(invert({})).toEqual({});
});