const createLookup = require("./lookup.js");

//test.todo("creates a country currency code lookup for multiple codes");//
/*
Note this test script just tests the happy path of the function. 
Create a lookup object of key value pairs from an array of code pairs
const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
Acceptance Criteria:
*/
const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];

test("createLookup returns an object with country codes as keys and currency codes as values", () => { 
  const lookup = createLookup(countryCurrencyPairs);
  expect(lookup).toEqual({
    'US': 'USD',
    'CA': 'CAD'
  });
});
/*
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

These are tests for empty and multiple pairs to test edge cases. 
 */

test("createLookup handles empty input array", () => {
  const emptyPairs = [];
  const lookup = createLookup(emptyPairs);
  expect(lookup).toEqual({});
});

test("createLookup handles multiple pairs", () => {
  const morePairs = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']];
  const lookup = createLookup(morePairs);
  expect(lookup).toEqual({
    'US': 'USD',
    'CA': 'CAD',
    'GB': 'GBP'
  });
});

// these test check unexpected input types to ensure the function can handle them gracefully.
test("createLookup handles non-array input", () => {
  expect(() => createLookup("not an array")).toThrow();
});

test("createLookup handles array with non-array elements", () => {
  const invalidPairs = [['US', 'USD'], 'invalid pair'];
  expect(() => createLookup(invalidPairs)).toThrow();
});     

