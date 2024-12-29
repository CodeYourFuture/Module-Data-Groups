const invert = require("./invert.js");

test("Inverts a simple object", () => {
  const obj = { a: 1 };
  const expected = { 1: "a" };
  expect(invert(obj)).toEqual(expected);
});


   test("inverts basic key-value pairs", () => {
     const input = { a: 1, b: 2 };
     const expected = { 1: "a", 2: "b" };
     expect(invert(input)).toEqual(expected);
   });
