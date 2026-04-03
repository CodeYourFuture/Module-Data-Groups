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
test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("returns an empty object for invalid input", () => {
  expect(createLookup("not-an-array")).toEqual({});
});

test("ignores invalid pairs inside array", () => {
  const input = [["US", "USD"], ["CA"], "invalid"];

  expect(createLookup(input)).toEqual({
    US: "USD",
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
