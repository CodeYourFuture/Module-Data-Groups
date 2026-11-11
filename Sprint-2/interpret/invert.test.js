const invert = require("./invert.js");

test("Given object, returns object with inverted values and keys", () => {
  expect(invert({ a: 8, b: 2 })).toEqual({ 8: "a", 2: "b" });
});
