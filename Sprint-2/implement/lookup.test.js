const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["USA", "USD"],
    ["Canada", "CAD"],
    ["Japan", "JPY"],
  ];

  const expected = {
    USA: "USD",
    Canada: "CAD",
    Japan: "JPY",
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
describe("createLookup", () => {
  test("creates an object mapping country codes to currency codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const expected = { US: "USD", CA: "CAD" };
    expect(createLookup(input)).toEqual(expected);
  });

  test("returns empty object when input is empty", () => {
    expect(createLookup([])).toEqual({});
  });

  test("overwrites duplicate keys with last value", () => {
    const input = [
      ["US", "USD"],
      ["US", "US Dollar"],
    ];
    expect(createLookup(input)).toEqual({ US: "US Dollar" });
  });
});
