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

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test('should return an object', () => {
    expect(typeof tally([])).toBe('object');
})
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("should return an empty object when given an empty array", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("should return correct counts for each unique item", () => {
  expect(tally(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ 'string : a': 3, 'string : b': 2, 'string : c': 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("should throw an error when given invalid input", () => {
  expect(() => tally("invalid input")).toThrow("Input must be an array");
});

//no args passed
test("should throw an error when no arguments are passed", () => {
  expect(() => tally()).toThrow("Input must be an array");
});

//edge cases
test("should handle array with null/undefined values with strings of null/undefined", () => {
  expect(tally([null, undefined, null, 'a', undefined])).toEqual({ '_null_': 2, '_undefined_': 2, 'string : a': 1 });
  expect(
    tally([null, undefined, null, "a", undefined, "null", "undefined"])
  ).toEqual({
    _null_: 2,
    _undefined_: 2,
    "string : a": 1,
    "string : null": 1,
    "string : undefined": 1,
  });
  expect(tally([undefined, undefined, , ,null, null, null])).toEqual({ '_undefined_': 4, '_null_': 3  });
  expect(tally([null, undefined, "_null_", "_undefined_"])).toEqual({
    _null_: 1,
    _undefined_: 1,
    "string : _null_": 1,
    "string : _undefined_": 1,
  });
});

test("should handle array with special characters", () => {
  expect(tally(["@", "#", "@", "$", "%", "#", "@"])).toEqual({
    "string : @": 3,
    "string : #": 2,
    "string : $": 1,
    "string : %": 1,
  });
});


test("should handle array with object method ", () => {
  expect(tally(["toString", "valueOf", "toString", "hasOwnProperty"])).toEqual({
    "string : toString": 2,
    "string : valueOf": 1,
    "string : hasOwnProperty": 1,
  }); 
});

test("should handle array with different data types", () => {
  expect(tally([1, "1", true, false, 1, "1", true])).toEqual({
    "number : 1": 2,
    "string : 1": 2,
    "boolean : true": 2,
    "boolean : false": 1,
  });
});

test("should handle array with negative numbers and zero", () => {
  expect(tally([0, -1, -1, 0, 1, -1])).toEqual({
    "number : 0": 2,
    "number : -1": 3,
    "number : 1": 1,
  });
});

