const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

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

describe("lookup", () => {
  test("given 2D array, return object the keys are the country codes and the values are the corresponding currency codes", () => {
    expect(createLookup([['US', 'USD'], ['CA', 'CAD']])).toStrictEqual({'US': 'USD','CA': 'CAD'});
  });
});

// Change to .toStrictEqual, because .toBe works for primitives (strings, numbers).
