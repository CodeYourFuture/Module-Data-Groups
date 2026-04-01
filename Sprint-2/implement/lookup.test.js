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

test("return an object with country codes as keys and currency codes as values", () => {
  expect( createLookup([ ["MX", "MXN"], ["JP", "JPY"] ])).toEqual({ MX: "MXN", JP: "JPY"});
  expect( createLookup([ ["AU", "AUD"], ["CH", "CHF"] ])).toEqual({ AU: "AUD", CH: "CHF" });
});

describe("return an object with country codes as keys and currency codes as values", () => {
  [
    { input: [["US", "USD"],["CA", "CAD"]], expected: { US: "USD", CA: "CAD" } },
    { input: [["GB", "GBP"],["FR", "EUR"]], expected: { GB: "GBP", FR: "EUR" } },
    { input: [["JP", "JPY"],["AU", "AUD"]], expected: { JP: "JPY", AU: "AUD" } },
  ].forEach(({ input, expected }) => {
    it(`should convert ${JSON.stringify(input)} into ${JSON.stringify(expected)}`, () => {
      expect(createLookup(input)).toEqual(expected);
    });
  });
});
