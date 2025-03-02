const createLookup = require("./lookup.js");


test("creates a country currency code lookup for multiple codes", () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']];
  const expectedOutput = { US: 'USD', CA: 'CAD', GB: 'GBP' };

  expect(createLookup(input)).toEqual(expectedOutput);
});

test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("throws an error if input is not an array", () => {
  expect(() => createLookup(null)).toThrow("Input must be an array of arrays.");
  expect(() => createLookup("string")).toThrow("Input must be an array of arrays.");
  expect(() => createLookup(42)).toThrow("Input must be an array of arrays.");
});

test("throws an error if elements are not valid pairs", () => {
  expect(() => createLookup([['US']])).toThrow("Each pair must contain two strings.");
  expect(() => createLookup([['US', 123]])).toThrow("Each pair must contain two strings.");
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
