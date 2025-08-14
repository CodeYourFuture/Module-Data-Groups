const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ['US', 'USD'],
    ['CA', 'CAD'],
    ['UK', 'GBP'],
  ];
  const expected = {
    US: 'USD',
    CA: 'CAD',
    UK: 'GBP'
  };
 expect(createLookup(input)).toEqual(expected);
});

test("returns an empty object when given an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("overwrites value if a country code appears more than once", () => {
  const input = [
    ['UK', 'GBP'],
    ['UK', 'POUND']
  ];
  expect(createLookup(input)).toEqual({ UK: 'POUND' });
});

test("ignores extra values in pairs", () => {
  const input = [
    ['UK', 'GBP', 'Extra'],
    ['US', 'USD']
  ];
  expect(createLookup(input)).toEqual({ UK: 'GBP', US: 'USD' });
});

test("ignores invalid pairs (less than two elements)", () => {
  const input = [
    ['UK'], // Invalid
    ['US', 'USD']
  ];
  expect(createLookup(input)).toEqual({ US: 'USD' });
});


  /*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD'],['UK','GBP']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD'], ['UK', 'GPB']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD',
   'UK': 'GBP'
 }
*/
