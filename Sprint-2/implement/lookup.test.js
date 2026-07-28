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

test("It should return an object where the keys are the country codes and the values are the corresponding currency codes", () => {
  const currentOutput = createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ]);
  const targetOutput = { US: "USD", CA: "CAD" };
  expect(currentOutput).toEqual(targetOutput);
});

test("It should return an empty object where the arrays are empty", () => {
  const currentOutput = createLookup([[], []]);
  const targetOutput = {};
  expect(currentOutput).toEqual(targetOutput);
});
