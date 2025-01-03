const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

describe('createLookup', () => {
  test('creates a lookup object from a valid array', () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['JP', 'JPY']];
  const expected = {US: 'USD', CA: 'CAD', JP: 'JPY'};
  expect(createLookup(input)).toEqual(expected);
  });
  test('return empty object for empty array', () => {
    expect(createLookup([])).toEqual({});
  });

  test("ignore invalid pairs", () => {
    const input = [["US", "USD"], ["HTF"], ["CA", "CAD"]];
    const expected = { US: "USD", CA: "CAD" };
    expect(createLookup(input)).toEqual(expected);
  });

  test("handles duplicate country codes by keeping the last value", () => {
    const input = [ ["US", "USD"], ["US", "USN"]];
    const expected = { US: "USN" };
    expect(createLookup(input)).toEqual(expected);
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
