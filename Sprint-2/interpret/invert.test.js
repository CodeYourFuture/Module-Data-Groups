const invert = require("./invert.js");

test("swaps keys and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("returns an empty object for an empty input", () => {
  expect(invert({})).toEqual({});
});

test("keeps the last key when values are repeated", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});

test("handles a special property name as a value", () => {
  expect(invert({ a: "__proto__" })).toEqual(
    JSON.parse('{"__proto__":"a"}')
  );
});
