const invert = require("./invert.js");
test("should return convereted object", () => {
  expect(invert({ a: "1", b: "2" })).toStrictEqual({ 1: "a", 2: "b" });
});
test("for an empty input should return {}", () => {
  expect(invert({})).toStrictEqual({});
});
test("for input with one property should invert it", () => {
  expect(invert({ a: 1 })).toStrictEqual({ 1: "a" });
});
