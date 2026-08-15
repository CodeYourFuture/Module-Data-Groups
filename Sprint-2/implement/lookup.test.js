const createLookup = require("./lookup.js");

test("creates lookup object from pairs", () => {
  const pairs = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const expected = { US: "USD", CA: "CAD" };
  expect(createLookup(pairs)).toEqual(expected);
});

test("empty input returns empty object", () => {
  expect(createLookup([])).toEqual({});
});

test("ignores malformed pairs and only maps valid 2-item arrays", () => {
  const pairs = [["GB", "GBP"], ["X"], null, ["FR", "EUR"]];
  const expected = { GB: "GBP", FR: "EUR" };
  expect(createLookup(pairs)).toEqual(expected);
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
