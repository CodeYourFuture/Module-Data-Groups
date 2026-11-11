const invert = require("./invert.js");
// for an empty object
test(" should return an empty object if given empty object", () => {
  expect(invert({})).toEqual({});
});
//test for one proprty in an object
test(" should return an empty object if given empty object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
//test for two property in an object
test(" should return an empty object if given empty object", () => {
  expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
});
//
