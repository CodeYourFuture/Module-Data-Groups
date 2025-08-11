const invert = require("./invert");

test("inverts a simple object", () => {
  const input = { a: 1 };
  const expected = { 1: "a" };
  expect(invert(input)).toEqual(expected);
});

test("inverts a larger object", () => {
  const input = { a: 1, b: 2 };
  const expected = { 1: "a", 2: "b" };
  expect(invert(input)).toEqual(expected);
});

test("returns an empty object for an empty input", () => {
  const input = {};
  const expected = {};
  expect(invert(input)).toEqual(expected);
});

test("handles objects with numeric keys and values", () => {
  const input = { 10: "x", 20: "y" };
  const expected = { x: "10", y: "20" };
  expect(invert(input)).toEqual(expected);
});
