const createLookup = require("./lookup.js");

test("returns an object of country currency pair", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({ US: "USD", CA: "CAD" });
});

test("Throws an error if the input is not array of an array", () => {
  expect(() => {
    createLookup(["usd", "cad", "euro"]);
  }).toThrow("createLookup requires array of an array");
});

test("Throws an error if the input is not array of an array with string elements", () => {
  expect(() => {
    createLookup([
      [23, "USD"],
      ["CA", 67],
    ]);
  }).toThrow("createLookup requires array of an array");
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
