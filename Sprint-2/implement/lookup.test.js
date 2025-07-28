const createLookup = require("./lookup.js");

test("convert the array to object ", () => {
  const countryAndCurrency = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const result = { US: "USD", CA: "CAD" };
  expect(createLookup(countryAndCurrency)).toEqual(result);
});
test("returns empty object when input is empty array ", () => {
  const countryAndCurrency = [];
  const result = {};
  expect(createLookup(countryAndCurrency)).toEqual(result);
});
test("works with more than two pairs", () => {
  const countryAndCurrency = [
    ["TR", "TRY"],
    ["JP", "JPY"],
    ["DE", "EUR"],
  ];
  const result = { TR: "TRY", JP: "JPY", DE: "EUR" };
  expect(createLookup(countryAndCurrency)).toEqual(result);
});
test("returns empty object when input is null", () => {
  expect(createLookup(null)).toEqual({});
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
