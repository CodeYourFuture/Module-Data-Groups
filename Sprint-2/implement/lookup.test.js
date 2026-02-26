const createLookup = require("./lookup.js");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

test("converts 2d array to object", () => {
  expect(
    createLookup([
      ["a", "x"],
      ["b", "y"],
      ["c", "z"],
    ])
  ).toEqual({ a: "x", b: "y", c: "z" });
});

test("convert empty array, to empty object", () => {
  expect(createLookup([])).toEqual({});
});

test("convert single 2d array, to object with one key", () => {
  expect(createLookup([["a", "wow"]])).toEqual({ a: "wow" });
});

// this is the behaviour of Object.fromEntries(), I keep it for consistency
test("when there are duplicate keys, later entries overwrite earlier entries", () => {
  expect(
    createLookup([
      ["a", "ff"],
      ["b", "gg"],
      ["a", "hh"],
    ])
  ).toEqual({ b: "gg", a: "hh" });
});

test("when input is not an array throw error", () => {
  expect(() => createLookup("asdf")).toThrow();
  expect(() => createLookup(1)).toThrow();
  expect(() => createLookup({ a: 12 })).toThrow();
});

test("when input is not a  2d array throw error", () => {
  expect(() => createLookup(["a", "b"])).toThrow();
  expect(() => createLookup([["a", "b"]])).not.toThrow();
});

test("when length of internal array not 1 < arr.length < 3", () => {
  expect(() => createLookup(["a"])).toThrow();
  expect(() => createLookup(["a", "b", "c"])).toThrow();
});

test("when non-string k, v pairs throw error", () => {
  expect(() =>
    createLookup([
      [1, 2],
      [3, 4],
    ])
  ).toThrow();
});
