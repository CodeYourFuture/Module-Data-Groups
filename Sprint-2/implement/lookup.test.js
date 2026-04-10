const createLookup = require("./lookup.js");

test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("creates a country currency code lookup for multiple codes", () => {
  expect(createLookup([['US', 'USD'], ['CA', 'CAD']])).toEqual({
    'US': 'USD',
    'CA': 'CAD'
  });
});

test("creates a lookup for a single pair", () => {
  expect(createLookup([['GB', 'GBP']])).toEqual({ 'GB': 'GBP' });
});

test("creates a lookup for multiple European countries with EUR", () => {
  expect(createLookup([['NLD', 'EUR'], ['GER', 'EUR'], ['BEL', 'EUR'], ['FRA', 'EUR'], ['ESP', 'EUR'], ['POR', 'EUR']])).toEqual({
    'NLD': 'EUR',
    'GER': 'EUR',
    'BEL': 'EUR',
    'FRA': 'EUR',
    'ESP': 'EUR',
    'POR': 'EUR'
  });
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
