const createLookup = require("./lookup.js");

test("given currency code pairs returns an object with the country and its currency code", () => {
  expect(
    createLookup([
      ["JP", "JPY"],
      ["GB", "GBP"],
    ])
  ).toEqual({ JP: "JPY", GB: "GBP" });
});

test("given an empty array returns an empty object", () => {
  expect(createLookup([])).toEqual({});
});

test("reassigns the previous currency when a country code is duplicated", () => {
  expect(
    createLookup([
      ["GB", "GBP"],
      ["GB", "XXX"],
    ])
  ).toEqual({ GB: "XXX" });
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
