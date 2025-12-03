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

describe("createLookup", () => {
  test("should create a lookup object from country-currency pairs", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
      ["FR", "EUR"],
    ];

    const expectedLookup = {
      US: "USD",
      CA: "CAD",
      GB: "GBP",
      FR: "EUR",
    };

    const lookup = createLookup(countryCurrencyPairs);
    expect(lookup).toEqual(expectedLookup);
  });

  test("should return an empty object when given an empty array", () => {
    const countryCurrencyPairs = [];
    const expectedLookup = {};

    const lookup = createLookup(countryCurrencyPairs);
    expect(lookup).toEqual(expectedLookup);
  });

  test("should handle single pair correctly", () => {
    const countryCurrencyPairs = [["CA", "CAD"]];
    const expectedLookup = {
      CA: "CAD",
    };

    const lookup = createLookup(countryCurrencyPairs);
    expect(lookup).toEqual(expectedLookup);
  });
});
