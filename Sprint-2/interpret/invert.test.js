const invert = require("./invert.js");

test("Inverts a simple object", () => {
  const obj = { a: 1 };
  const expected = { 1: "a" };
  expect(invert(obj)).toEqual(expected);
});

test("Inverts a complex object", () => {
  const obj = { a: 1, b: 2, c: 1 };
  const expected = { 1: ["a", "c"], 2: ["b"] };
  expect(invert(obj)).toEqual(expected);
});