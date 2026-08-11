const invert = require("./invert.js");
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

describe("invert function", () => {
  test("should swap the keys and values in the object", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });
});
