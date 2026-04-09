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
Lookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
// Given an invalid input (not an array of arrays),
test('given string input throw "Invalid input: expected an array of arrays"', () => {
  let input = "invalid input: expected an array of arrays";
  expect(() => Lookup(input)).toThrow(
    "Invalid input: expected an array of arrays"
  );
});

// Given an array where its elements are not arrays,
test('given array with non-array elements throw "Invalid input: expected an array of arrays"', () => {
  let input = [["US", "USD"], "CA"];
  expect(() => Lookup(input)).toThrow(
    "Invalid input: expected an array of arrays"
  );
});

// Given an array where its elements are arrays with more than two elements,
test('given arrays with too many elements throw "Invalid input: expected an array of arrays"', () => {
  const input = [
    ["US", "USD", "flag"],
    ["CA", "CAD"],
  ];
  expect(() => Lookup(input)).toThrow(
    "Invalid input: expected an array of arrays"
  );
});

// Given an array where its elements are arrays with less than two elements,
test('given arrays with too few elements throw "Invalid input: expected an array of arrays"', () => {
  const input = [["US", "USD"], ["CA"]];
  expect(() => Lookup(input)).toThrow(
    "Invalid input: expected an array of arrays"
  );
});
