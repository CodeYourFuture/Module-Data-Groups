const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const result = createLookup(input);
  expect(result).toEqual({
    US: "USD",
    CA: "CAD",
  });
});

test("creates a lookup for 1 pair", () => {
  const input = [["IN", "INR"]];
  const result = createLookup(input);
  expect(result).toEqual({
    IN: "INR",
  });
});

test("returns an empty object when input array is empty", () => {
  const input = [];
  const result = createLookup(input);
  expect(result).toEqual({});
});

test("ignores cases where it is invalid within other pairs", () => {
  const input = [["US", "USD"], ["Invalid"], ["CA", "CAD"]];
  const result = createLookup(input);
  expect(result).toEqual({
    US: "USD",
    CA: "CAD",
  });
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
