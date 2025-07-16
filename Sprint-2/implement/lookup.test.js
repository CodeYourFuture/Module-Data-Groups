const createLookup = require("./lookup.js");

test("given an array with inner arrays like [key,value], createLookup should return an object made from the key-value pairs", () => {
  const countryCurrency = [['US', 'USD'], ['CA', 'CAD']];
  const lookup = {US: 'USD', CA: 'CAD'};
  expect(createLookup(countryCurrency)).toEqual(lookup);
});


test("an array with inner arrays that have length != 2 should cause createLookup to throw an error", () => {
  const invalidArrs = [[1,2,3],['beans','toast']];
  expect(() => createLookup(invalidArrs)).toThrow();
})

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
