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

// I originally started with a list of tests....
// test("Given an input of an array of pairs, it returns a lookup object", () => {
//   const pairsArr = [
//     ["US", "USD"],
//     ["CA", "CAD"],
//     ["GB", "GBP"],
//   ];
//   expect(createLookup(pairsArr)).toEqual({ US: "USD", CA: "CAD", GB: "GBP" });
// });

// test("Given an array with a single pair, it returns a lookup object", () => {
//   const pairsArr = [["ESP", "EUR"]];
//   expect(createLookup(pairsArr)).toEqual({ ESP: "EUR" });
// });

// test("Given an empty array, it returns an empty object", () => {
//   const pairsArr = [];
//   expect(createLookup(pairsArr)).toEqual({});
// });

// ...but then decided to parameterize them.
describe("createLookup object from valid input", () => {
  test.each([
    [
      [
        ["US", "USD"],
        ["CA", "CAD"],
        ["GB", "GBP"],
      ],
      { US: "USD", CA: "CAD", GB: "GBP" },
    ],
    [[["ESP", "EUR"]], { ESP: "EUR" }],
    [[], {}],
  ])("Given %j, it returns %j", (pairsArr, expected) => {
    expect(createLookup(pairsArr)).toEqual(expected);
  });
});

// Given an invalid array input
// When passed to createLookup
// Then it should throw an error

// test("Given an invalid array input, it should throw an error", () => {
//   expect(() => createLookup(null)).toThrow(
//     "Input must be a non-null array of pairs"
//   );
// });

// test("Given a string input, it should throw an error", () => {
//   expect(() => createLookup("IRL: EUR, BR: BRL")).toThrow(
//     "Input must be a non-null array of pairs"
//   );
// });

// test("throws an error if any pair is not an array", () => {
//   expect(() => createLookup([["FR", "EUR"], "invalid"])).toThrow(
//     "Input pairs must have exactly two elements"
//   );
// });

// test("throws an error if any pair has less than two elements", () => {
//   expect(() => createLookup([["JP", "JPY"], ["CA"]])).toThrow(
//     "Input pairs must have exactly two elements"
//   );
// });

// test("throws an error if any pair does not have exactly two elements", () => {
//   expect(() =>
//     createLookup([
//       ["US", "USD"],
//       ["AU", "AUD", "EXTRA"],
//     ])
//   ).toThrow("Input pairs must have exactly two elements");
// });

// parameterized version of the tests:
describe("createLookup invalid input handling", () => {
  test.each([
    [null, "Input must be a non-null array of pairs"],
    ["IRL: EUR, BR: BRL", "Input must be a non-null array of pairs"],
    [[["FR", "EUR"], "invalid"], "Input pairs must have exactly two elements"],
    [[["JP", "JPY"], ["CA"]], "Input pairs must have exactly two elements"],
    [
      [
        ["US", "USD"],
        ["AU", "AUD", "EXTRA"],
      ],
      "Input pairs must have exactly two elements",
    ],
  ])("Given %j, it throws an error", (pairsArr, expected) => {
    expect(() => createLookup(pairsArr)).toThrow(expected);
  });
});
