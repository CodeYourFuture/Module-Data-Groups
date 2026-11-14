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
test("should return an empty object key from an empty array ", () => {
  expect(createLookup([])).toEqual({});
});
test("should return an object key value pairs from an array of one country currency code ", () => {
  expect(createLookup([["US", "USD"]])).toEqual({ US: "USD" });
});
test("should return an object key value pairs from an array of  multiple code pairs", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({
    US: "USD",
    CA: "CAD",
  });
});
test("should return an object key value pairs from an array of  three code pairs", () => {
  expect(
    createLookup([
      ["ERI", "NAK"],
      ["CA", "CAD"],
      ["EU", "EUR"],
    ])
  ).toEqual({
    ERI: "NAK",
    CA: "CAD",
    EU: "EUR",
  });
});
