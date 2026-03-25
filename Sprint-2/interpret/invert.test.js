const invert = require("./invert.js");

test("inverts object correctly", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    "1": "a",
    "2": "b"
  });
});