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

// Given an array of country-currency pairs
// When createLookup is called
// Then it should return an object with matching key-value pairs
test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];

  const output = createLookup(input);

  expect(output).toEqual({
    US: "USD",
    CA: "CAD",
  });
});

// Given an empty array
// When createLookup is called
// Then it should return an empty object
test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});

// Given a single country-currency pair
// When createLookup is called
// Then it should return an object with one property
test("creates a lookup for a single code pair", () => {
  const input = [["GB", "GBP"]];

  expect(createLookup(input)).toEqual({
    GB: "GBP",
  });
});

// Given multiple country-currency pairs
// When createLookup is called
// Then it should include all pairs in the result
test("creates a lookup for several code pairs", () => {
  const input = [
    ["GB", "GBP"],
    ["JP", "JPY"],
    ["ET", "ETB"],
  ];

  expect(createLookup(input)).toEqual({
    GB: "GBP",
    JP: "JPY",
    ET: "ETB",
  });
});
