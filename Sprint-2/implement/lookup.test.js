const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const expectedOutput = { US : 'USD', CA: 'CAD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});
test("creates a country currency code lookup for single code", () => {
  const input = [['US', 'USD']];
  const expectedOutput = { US : 'USD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});
test("creates an empty lookup for no input", () => {
  const input = [];
  const expectedOutput = {};
  expect(createLookup(input)).toEqual(expectedOutput);
});
test("creates a lookup with multiple entries", () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['UK', 'GBP']];
  const expectedOutput = { US: 'USD', CA: 'CAD', UK: 'GBP' };
  expect(createLookup(input)).toEqual(expectedOutput);
});
test("creates a lookup with duplicate country codes", () => {
  const input = [['US', 'USD'], ['US', 'EUR']];
  const expectedOutput = { US: 'EUR' }; 
  // Last entry should overwrite previous
  expect(createLookup(input)).toEqual(expectedOutput);
});
test("creates a lookup with mixed case country codes", () => {
  const input = [['us', 'USD'], ['CA', 'CAD'], ['Us', 'EUR']];
  const expectedOutput = { us: 'EUR', CA: 'CAD' };
  expect(createLookup(input)).toEqual(expectedOutput);
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
