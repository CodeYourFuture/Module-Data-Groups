const invert = require("./invert");

test("invert swaps keys and values in an object", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { "1": "a", "2": "b" };
  expect(invert(input)).toEqual(expectedOutput);
});

test("invert returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});

test("invert works with string values", () => {
  const input = { x: "10", y: "20" };
  const expectedOutput = { "10": "x", "20": "y" };
  expect(invert(input)).toEqual(expectedOutput);
});
