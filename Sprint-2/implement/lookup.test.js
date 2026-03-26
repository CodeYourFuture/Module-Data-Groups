const createLookup = require("./lookup.js");

describe("createLookup", () => {
  [
    {
      input: [
        ["US", "USD"],
        ["CA", "CAD"],
        ["NJA", "NGN"],
        ["RSA", "RND"],
        ["UK", "GBP"],
      ],
      expected: { US: "USD", CA: "CAD", NJA: "NGN", RSA: "RND", UK: "GBP" },
    },
  ].forEach(({ input, expected }) =>
    it(`Should return an object lookup of currency representing country code as keys`, () => {
      expect(createLookup(input)).toEqual(expected);
    })
  );
  [{ input: ["US", "USD", "CA", "CAD"], expected: "Invalid input" }].forEach(
    ({ input, expected }) =>
      it(`should return "Invalid input" for any input not following the input format`, () => {
        expect(createLookup(input)).toEqual(expected);
      })
  );
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
