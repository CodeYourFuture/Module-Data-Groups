const invert = require("./invert.js");

test("inverts a simple object with unique values", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { 1: "a", 2: "b" };
  expect(invert(input)).toEqual(expectedOutput);
});