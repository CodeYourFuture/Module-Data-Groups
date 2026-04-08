const Lookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["DZ", "DZD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const result = {
    DZ: "DZD",
    CA: "CAD",
    GB: "GBP",
  };
  expect(Lookup(input)).toEqual(result);
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
Lookup(coCuPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
// Given an invalid input (not an array of arrays),
test('return "Invalid input: expected an array of arrays" for string input', () => {
  const input = "invalid input: expected an array of arrays";
  expect(Lookup(input)).toEqual("Invalid input: expected an array of arrays");
});

// Given an array where its elements are not arrays,
test('return "Invalid input: expected an array of arrays" for non-array elements', () => {
  const input = [["US", "USD"], "CA"];
  expect(Lookup(input)).toEqual("Invalid input: expected an array of arrays");
});

// Given an array where its elements are arrays with more than two elements,
test('return "Invalid input: expected an array of arrays" for arrays with too many elements', () => {
  const input = [
    ["US", "USD", "flag"],
    ["CA", "CAD"],
  ];
  expect(Lookup(input)).toEqual("Invalid input: expected an array of arrays");
});

// Given an array where its elements are arrays with less than two elements,
test('return "Invalid input: expected an array of arrays" for arrays with too few elements', () => {
  const input = [["US", "USD"], ["CA"]];
  expect(Lookup(input)).toEqual("Invalid input: expected an array of arrays");
});
