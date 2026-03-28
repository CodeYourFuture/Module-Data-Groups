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

// Given multiple country-currency pairs
// When createLookup is called
// Then it should return an object with country codes as keys and currency codes as values
test("creates a country currency code lookup for multiple codes", () => {
  const pairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  expect(createLookup(pairs)).toEqual({ US: "USD", CA: "CAD", GB: "GBP" });
});

// Given a single country-currency pair
// When createLookup is called
// Then it should return an object with that one key-value pair
test("creates a lookup for a single country-currency pair", () => {
  expect(createLookup([["EG", "EGP"]])).toEqual({ EG: "EGP" });
});

// Given an empty array
// When createLookup is called
// Then it should return an empty object
test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});
