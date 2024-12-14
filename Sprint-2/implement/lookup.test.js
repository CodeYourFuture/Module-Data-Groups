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



test('handles duplicate country codes by using the last occurrence', () => {
  const input = [['US', 'USD'], ['US', 'USN']];
  const expected = { US: 'USN' };
  expect(createLookup(input)).toEqual(expected);
});

test('creates a lookup object from country-currency pairs', () => {
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const expected = { US: 'USD', CA: 'CAD' };
  expect(createLookup(input)).toEqual(expected);
});

test('returns an empty object for an empty input array', () => {
  expect(createLookup([])).toEqual({});
});