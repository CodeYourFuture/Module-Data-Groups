const invert = require("./invert");

test("invert returns an object with keys and values swapped, simple case", () => {
  const input = { a: 1 };
  const expectedOutput = { 1: "a" };
  expect(invert(input)).toEqual(expectedOutput);
});

test("invert returns an object with keys and values swapped, multiple pairs", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { 1: "a", 2: "b" };
  expect(invert(input)).toEqual(expectedOutput);
});

test("invert handles empty objects", () => {
  const input = {};
  const expectedOutput = {};
  expect(invert(input)).toEqual(expectedOutput);
});

test("invert handles non-string values", () => {
  const input = { x: true, y: null };
  const expectedOutput = { true: "x", null: "y" };
  expect(invert(input)).toEqual(expectedOutput);
});
