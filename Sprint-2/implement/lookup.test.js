const createLookup = require("./lookup.js");



test("Should return an empty object for an empty array", () => {
  const countryCurrencyPairs = [];
  expect(createLookup(countryCurrencyPairs)).toEqual({});
});


test("Should create a lookup object from a single pair", () => {
  const countryCurrencyPairs = [['US', 'USD']];
  expect(createLookup(countryCurrencyPairs)).toEqual({
    'US': 'USD'
  });
});


test("Should create a lookup object with multiple pairs", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD'], ['MX', 'MXN']];
  expect(createLookup(countryCurrencyPairs)).toEqual({
    'US': 'USD',
    'CA': 'CAD',
    'MX': 'MXN'
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
