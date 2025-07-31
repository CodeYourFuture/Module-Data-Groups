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
test("given a single country code and currency code", () => {
  const input = [['US', 'USD']];
  const expectedOutput = { US: 'USD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

test("given multiple country code and currency code pairs", () => {
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const expectedOutput = { US: 'USD', CA: 'CAD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

test("given an empty array, it should return an empty object", () => {
  const input = [];
  const expectedOutput = {};
  expect(createLookup(input)).toEqual(expectedOutput);
});

test("given duplicate country codes, the last one should overwrite", () => {
  const input = [['US', 'USD'], ['US', 'USN']];
  const expectedOutput = { US: 'USN' }; // 'USN' overwrites 'USD'
  expect(createLookup(input)).toEqual(expectedOutput);
});

