const createLookup = require("./lookup.js");

/*
Create a lookup object of key-value pairs from an array of code pairs

Acceptance Criteria:

Given:
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When:
 - createLookup function is called with the country-currency array as an argument

Then:
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example:
Given: [['US', 'USD'], ['CA', 'CAD']]

When:
createLookup(countryCurrencyPairs) is called

Then:
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

// Test: creates a country currency code lookup for multiple codes
test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']];
  const expectedOutput = {
    US: 'USD',
    CA: 'CAD',
    GB: 'GBP'
  };

  expect(createLookup(countryCurrencyPairs)).toEqual(expectedOutput);
});

// Test: returns an empty object when given an empty array
test("returns an empty object when given an empty array", () => {
  expect(createLookup([])).toEqual({});
});

// Test: handles a single country-currency pair correctly
test("handles a single country-currency pair correctly", () => {
  const countryCurrencyPairs = [['JP', 'JPY']];
  const expectedOutput = { JP: 'JPY' };

  expect(createLookup(countryCurrencyPairs)).toEqual(expectedOutput);
});

// Test: ignores invalid entries (e.g., missing or extra elements in sub-arrays)
test("ignores invalid entries", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['INVALID'], ['CA', 'CAD', 'EXTRA']];
  const expectedOutput = { US: 'USD' };

  expect(createLookup(countryCurrencyPairs)).toEqual(expectedOutput);
});

// Test: throws an error if input is not an array
test("throws an error if input is not an array", () => {
  expect(() => createLookup(null)).toThrow();
  expect(() => createLookup(123)).toThrow();
  expect(() => createLookup("invalid")).toThrow();
});
