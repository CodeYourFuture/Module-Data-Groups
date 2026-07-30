const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country currency code lookup for a single code", () => {
    const countryCurrencyPairs = [["US", "USD"]];
    const expectedLookup = { US: "USD" };
    expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
  });

  test("creates a country currency code lookup for multiple codes", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const expectedLookup = { US: "USD", CA: "CAD" };
    expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
  });

  test("returns an empty object when passed an empty array", () => {
    const countryCurrencyPairs = [];
    const expectedLookup = {};
    expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
  });

  test("throws error for invalid input", () => {
    expect(() => createLookup(null)).toThrow();
    expect(() => createLookup(undefined)).toThrow();
    expect(() => createLookup({})).toThrow();
  });

  test("returns repeated keys with the last value", () => {
    const countryCurrencyPairs = [
      ["US", "USN"],
      ["CA", "CAD"],
      ["US", "USD"],
    ];
    const expectedLookup = { US: "USD", CA: "CAD" };
    expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
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
