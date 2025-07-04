const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

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

// Acceptance criteria:
describe("creates a country currency code lookup for multiple codes", () => {
  it("the object contains the property, returns true", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    let expected = { US: "USD", CA: "CAD" };
    const result = createLookup(countryCurrencyPairs);
    expect(result).toEqual(expected);
  });

  it("the object contains the three properties, returns true", () => {
    const countryCurrencyPairs = [
      ["TR", "TRY"],
      ["JP", "JPY"],
      ["DK", "DKK"],
    ];
    let expected = { TR: "TRY", JP: "JPY", DK: "DKK" };
    const result = createLookup(countryCurrencyPairs);
    expect(result).toEqual(expected);
  });
});
