const createLookup = require("./lookup.js");

const errorMessage = "Input should be an array of arrays of code pairs";

test("Given an empty array, returns an empty object", () => {
  expect(createLookup([])).toStrictEqual({});
});

test("Given invalid parameter, return error message", () => {
  expect(() => createLookup("Invalid input")).toThrow(errorMessage);
  expect(() => createLookup({ a: "b" })).toThrow(errorMessage);
  expect(() => createLookup(123)).toThrow(errorMessage);
  expect(() => createLookup(null)).toThrow(errorMessage);
  expect(() => createLookup(undefined)).toThrow(errorMessage);
  expect(() => createLookup(true)).toThrow(errorMessage);
});

test("creates a country currency code lookup for multiple codes", () => {
  const validInput = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["JP", "JPY"],
  ];
  const target = {
    US: "USD",
    CA: "CAD",
    JP: "JPY",
  };
  expect(createLookup(validInput)).toStrictEqual(target);
});

test("Given an array with empty arrays, returns error message", () => {
  const emptyArrays = [[], []];
  expect(() => createLookup(emptyArrays)).toThrow(errorMessage);
  const emptyArrays2 = [[], [], ["JP", "JPY"]];
  expect(() => createLookup(emptyArrays2)).toThrow(errorMessage);
});

test("Given an array with objects, return error message", () => {
  const objectsArray = [{ a: "b" }, { c: "d" }];
  expect(() => createLookup(objectsArray)).toThrow(errorMessage);
});

test("Given an array mixed with valid arrays and invalid input, returns error message", () => {
  const mixInput = [["US", "USD"], { CA: "CAD" }, ["JP", "JPY"]];
  expect(() => createLookup(mixInput).toThrow(errorMessage));
  const mixInput2 = [["US", "USD"], undefined, ["JP", "JPY"]];
  expect(() => createLookup(mixInput2).toThrow(errorMessage));
  const mixInput3 = [["US", "USD"], null, ["JP", "JPY"]];
  expect(() => createLookup(mixInput3).toThrow(errorMessage));
});

test("Given an array with arrays but some are displaced, return error message", () => {
  const missFormatInput = [["US", "USD"], ["CA"], ["JP", "JPY", "CAD"]];
  expect(() => createLookup(missFormatInput)).toThrow(errorMessage);
});

test("Given an array with array of non-strings, return accordingly", () => {
  const nonStringInput = [
    ["US", undefined],
    ["CA", "CAD"],
    ["JP", null],
  ];
  const target = {
    US: undefined,
    CA: "CAD",
    JP: null,
  };
  expect(createLookup(nonStringInput)).toStrictEqual(target);
});

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
