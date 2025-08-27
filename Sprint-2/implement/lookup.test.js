const createLookup = require("./lookup.js");

//  Core Test: Normal input of multiple country-currency pairs
test("creates a country currency code lookup for multiple codes", () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['JP', 'JPY']];
  const expected = {
    US: 'USD',
    CA: 'CAD',
    JP: 'JPY',
  };
  expect(createLookup(input)).toEqual(expected);
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
// Edge Case 1: Empty array input
test("returns empty object when given an empty array", () => {
  expect(createLookup([])).toEqual({});
});
// dge Case 2: Duplicate country codes (last value wins)
test("overwrites value if country code is duplicated", () => {
  const input = [['US', 'USD'], ['US', 'US Dollars']];
  const expected = { US: 'US Dollars' };
  expect(createLookup(input)).toEqual(expected);
});