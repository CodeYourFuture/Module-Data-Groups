const invert = require("./invert.js");

// Given an empty object
// When invert is passed this object
// Then it should return an empty object.
test("Given an empty object,should return an empty object", () => {
  expect(invert({})).toEqual({});
});

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
test("Given an object, should swap the keys and values in the object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invert({ a: 1, b: 2, c: 3, d: 4 })).toEqual({
    1: "a",
    2: "b",
    3: "c",
    4: "d",
  });
});

test("Given an empty object, should swap the keys and values in the object", () => {});
