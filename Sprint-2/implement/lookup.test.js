const createLookup = require("./lookup.js");

describe("createLookup function", () => {
  test("creates lookup object from country-currency pairs with string keys", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const result = createLookup(input);
    const expected = { US: "USD", CA: "CAD" };
  });

  test("returns empty object for empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("handles single country-currency pair", () => {
    const input = [["UK", "GBP"]];
    const expected = { UK: "GBP" };
  });

  test("handles invalid input gracefully", () => {
    expect(createLookup(null)).toEqual({});
    expect(createLookup(undefined)).toEqual({});
    expect(createLookup("not an array")).toEqual({});
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
