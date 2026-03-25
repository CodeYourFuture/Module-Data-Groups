const createLookup = require("./lookup.js");

// test.todo("creates a country currency code lookup for multiple codes");

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
test(
  "given An array of arrays representing country code and currency code pairs, it should return an object where the keys are the country code", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["NG", "NGN"],
      ["GP", "GBP"],
    ];
    const result = createLookup(input);
    expect(result).toStrictEqual({
      US: "USD",
      CA: "CAD",
      NG: "NGN",
      GP: "GBP"
    })
  }
);

