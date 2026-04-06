const invert = require("./invert.js");

test("inverts objects correctly", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    "1": "a",
    "2": "b"
  });
});

test("handles duplicate values and uses the last key overwrites the first", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({
    "1": "b"
  });
});

test("works when keys are numbers", () => {
  expect(invert({ 1: "alpha", 2: "beta" })).toEqual({
    "alpha": "1",
    "beta": "2"
  });
});

test("returns an empty object when input is empty", () => {
  expect(invert({})).toEqual({});
});

