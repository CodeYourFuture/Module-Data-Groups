const invert = require("./invert.js");
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
describe("invert()", () => {
  describe("invert function", () => {
    test("should swap the keys and values in the object", () => {
      expect(invert({ a: 1 })).toEqual({ 1: "a" });
      expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
    });
  });

  describe("given an empty object is passed into the function", () => {
    test("should return and empty object", () => {
      expect(invert({})).toEqual({});
    });
  });
});
