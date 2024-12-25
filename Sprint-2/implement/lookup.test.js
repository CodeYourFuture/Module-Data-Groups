const createLookup = require("./lookup.js");


test("createLookup with an empty array returns an empty object", () => {
  const result = createLookup([]);
  expect(result).toEqual({});
});

test("createLookup with a single pair returns a correct object", () => {
  const result = createLookup([['US', 'USD']]);
  expect(result).toEqual({ US: 'USD' });
});

test("createLookup with multiple pairs returns a correct lookup object", () => {
  const result = createLookup([
    ['US', 'USD'],
    ['CA', 'CAD'],
    ['GB', 'GBP'],
  ]);
  expect(result).toEqual({
    US: 'USD',
    CA: 'CAD',
    GB: 'GBP',
  });
});

test("createLookup with duplicate keys overwrites with the latest value", () => {
  const result = createLookup([
    ['US', 'USD'],
    ['US', 'US Dollars'],
  ]);
  expect(result).toEqual({ US: 'US Dollars' });
});

test("createLookup with invalid input (non-array elements) returns an empty object", () => {
  const result = createLookup(null);
  expect(result).toEqual({});
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
