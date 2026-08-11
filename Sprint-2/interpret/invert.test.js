const invert = require("./invert.js");

test("swap key with value", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("swap key with value", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});
