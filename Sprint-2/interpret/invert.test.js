// const invert = require("./invert.js")
const invert = require("./invert.js");


//Given a function invert
// When passed an object and a property name
// Then it should return the inverted object
test("", () => {
expect(invert({ a: 1 })).toEqual({ '1': 'a' });
});

// Given an empty object
// When passed to invert
// Then it should return an empty object
test("When passed an empty object to invert, should return an empty object", () => {
  expect(invert({})).toEqual({});
});

// Given an invalid input,
// When passed to invert
// Then it should throw an error
test("When invalid input, throw an error ", () => {
  expect(() => invert("")).toThrow("Your input is invalid!");
});
