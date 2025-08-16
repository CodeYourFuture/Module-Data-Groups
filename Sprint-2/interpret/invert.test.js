const invert = require("./invert.js");

test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts multiple unique key-value pairs", () => {
  expect(invert({ x: 3, y: 4 })).toEqual({ "3": "x", "4": "y" });
});
