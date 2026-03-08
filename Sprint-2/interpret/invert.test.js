const invert = require("../interpret/invert.js");

test("test for a number followed by a letter", () => {
  expect(invert({ 1: "a", 2: "b", 3: "c" })).toEqual({ a: 1, b: 2, c: 3 });
});
