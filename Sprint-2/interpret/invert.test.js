const invertObj = require("./invert.js");

describe("invertObj", () => {
  test("when given an object, should swap the keys and values in the object", () => {
    expect(invertObj({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  });
});
