const invert = require("./invert.js");

test("should return swaped keys and values for an given object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b"});
});