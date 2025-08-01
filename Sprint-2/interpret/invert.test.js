const invert = require("./invert.js"); //added import statement

//Case: Given an object with key,value pairs returns inverted object
test("given an object with key,value pairs, returns inverted object", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

//Case: Given an invalid input such as a string or array, throws as error
test("given an invalid input, throws an error", () => {
  expect(() => invert("a:1")).toThrow(new Error("Input must be an object"));
  expect(() => invert(null)).toThrow(new Error("Input must be an object"));
  expect(() => invert(1)).toThrow(new Error("Input must be an object"));
});
