const tally = require("./tally.js");

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally counts duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});
test("tally returns count for each unique item", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("tally throws an error when given an invalid input", () => {
  expect(() => tally("hello")).toThrow(new Error("tally requires an array"));
  expect(() => tally(30)).toThrow(new Error("tally requires an array"));
  expect(() => tally()).toThrow(new Error("tally requires an array"));
});

// Tally handles items named like built-in object properties
test("tally handles items named like built-in object properties", () => {
  expect(tally(["toString", "toString"])).toEqual({ toString: 2 });
});
