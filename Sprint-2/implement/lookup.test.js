const createLookup = require("./lookup.js");

describe("createLookup function", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
    ];
    const expectedOutput = {
      US: "USD",
      CA: "CAD",
      GB: "GBP",
    };
    expect(createLookup(input)).toEqual(expectedOutput);
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
  test("the test returns an empty object for an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("replace values if the country code shows up more than once", () => {
    const input = [
      ["US", "USD"],
      ["US", "USX"],
    ];
    const expectedOutput = {
      US: "USX",
    };
    expect(createLookup(input)).toEqual(expectedOutput);
  });
});
