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


test("contains Array of arrays returns a object", function () {
    
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const currentOutput = createLookup(input);
  const targetOutput = {'US': 'USD', 'CA': 'CAD'};

  expect(currentOutput).toEqual(targetOutput);
});
