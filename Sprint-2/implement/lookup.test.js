const createLookup = require("./lookup.js");

describe("createLookup()", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
    ];
    const expected = {
      US: "USD",
      CA: "CAD",
      GB: "GBP",
    };

    expect(createLookup(input)).toEqual(expected);
  });

  test("returns an empty object when passed an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("returns an empty object when passed invalid inputs", () => {
    expect(createLookup(null)).toEqual({});
    expect(createLookup("invalid")).toEqual({});
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
