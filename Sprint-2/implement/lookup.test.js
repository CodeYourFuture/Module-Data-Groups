const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];

  const expectedLookup = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };

  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});
test("returns correct lookup for valid input", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const expectedOutput = {
    US: "USD",
    CA: "CAD",
  };
  expect(createLookup(countryCurrencyPairs)).toEqual(expectedOutput);
});

test("throws error if input is not an array", () => {
  expect(() => createLookup("invalid")).toThrow(
    "Input must be a non-empty array of pairs"
  );
});

test("throws error if input is an empty array", () => {
  expect(() => createLookup([])).toThrow(
    "Input must be a non-empty array of pairs"
  );
});

test("throws error if codes are not strings", () => {
  const invalidPairs = [
    ["US", 123],
    ["CA", null],
  ];
  expect(() => createLookup(invalidPairs)).toThrow(
    "Both country code and currency code must be strings"
  );
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
