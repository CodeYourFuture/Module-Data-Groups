const createLookup = require("./lookup.js");

//test.todo("creates a country currency code lookup for multiple codes");

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

// Test case 1: Create a lookup for multiple country-currency pairs
test('should create a country-currency lookup from an array of pairs', () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
  const expected = {
    'US': 'USD',
    'CA': 'CAD'
  };
  
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

// Test case 2: Handle an empty input array
test('should return an empty object when given an empty array', () => {
  const countryCurrencyPairs = [];
  const expected = {};
  
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

// Test case 3: Handle a single country-currency pair
test('should create a lookup with a single country-currency pair', () => {
  const countryCurrencyPairs = [['US', 'USD']];
  const expected = {
    'US': 'USD'
  };
  
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

// Test case 4: Handle invalid input (non-array or malformed input)
test('should return an empty object when the input is not an array', () => {
  expect(createLookup(null)).toEqual({});
  expect(createLookup(undefined)).toEqual({});
  expect(createLookup("invalid")).toEqual({});
  expect(createLookup(123)).toEqual({});
  expect(createLookup(true)).toEqual({});
});
