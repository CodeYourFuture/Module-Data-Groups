const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Given an array of items
// When passed to tally
// Then it should return an object containing the count for each unique item
test("tally on a single item counts it once", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

test("tally on repeated items counts each one", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

test("tally on a mix of items counts each unique item", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally counts duplicates that are not next to each other", () => {
  expect(tally(["a", "b", "a", "c", "b", "a"])).toEqual({ a: 3, b: 2, c: 1 });
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("tally throws on a string", () => {
  expect(() => tally("abc")).toThrow(new Error("tally requires an array"));
});

test("tally throws on a number", () => {
  expect(() => tally(42)).toThrow(new Error("tally requires an array"));
});

test("tally throws when called with no argument", () => {
  expect(() => tally()).toThrow(new Error("tally requires an array"));
});

test("tally throws on null, undefined and plain objects", () => {
  expect(() => tally(null)).toThrow(new Error("tally requires an array"));
  expect(() => tally(undefined)).toThrow(new Error("tally requires an array"));
  expect(() => tally({ a: 1 })).toThrow(new Error("tally requires an array"));
});

// Extra edge cases
test("tally handles item names that match built-in object properties", () => {
  const result = tally(["constructor", "toString", "constructor"]);
  expect(result.constructor).toBe(2);
  expect(result.toString).toBe(1);
});

test("tally does not allow prototype pollution via __proto__", () => {
  const result = tally(["__proto__", "__proto__"]);
  expect({}.polluted).toBeUndefined();
  expect(Object.keys(result)).toEqual(["__proto__"]);
  expect(Object.getOwnPropertyDescriptor(result, "__proto__").value).toBe(2);
});

test("tally counts numbers and booleans by their string form", () => {
  expect(tally([1, 1, 2, true, true])).toEqual({ 1: 2, 2: 1, true: 2 });
});

test("tally treats different cases as different items", () => {
  expect(tally(["a", "A", "a"])).toEqual({ a: 2, A: 1 });
});

test("tally does not change the array it is given", () => {
  const input = ["a", "b", "a"];
  tally(input);
  expect(input).toEqual(["a", "b", "a"]);
});
