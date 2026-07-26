const invert = require("./invert.js");
test("invert the key and values", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("invert the key and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: b });
});
