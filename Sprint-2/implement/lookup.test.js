const createLookup = require("./lookup.js");

const countryCurrencyPairs = [["US", "USD"], ["GB", "GBP"], ["JP", "JPY"], ["NG", "NGN"], ["IN", "INR"], ["CA", "CAD"]];

test("creates a country currency code lookup for multiple codes", () => {
  const currentOutput = createLookup(countryCurrencyPairs);
  const targetOutput = {
  US: "USD",
  GB: "GBP",
  JP: "JPY",
  NG: "NGN",
  IN: "INR",
  CA: "CAD"
};
expect(currentOutput).toEqual(targetOutput);
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
