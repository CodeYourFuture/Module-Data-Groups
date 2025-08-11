const invert = require("./invert.js");

test("Given an object, then swap the keys and values in the object", () => {
  expect(invert({x : 10, y : 20})).toEqual({"10": "x", "20": "y"});
});
