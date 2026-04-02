const createLookup = require("./lookup.js");

test("creates a country currency code lookup for single code");
const input = [['US','USD'], ['CA','CAD']];
const result = createLookup(input);
expect(result).toEqual({
  'US': 'USD',
  'CA': 'CAD'
});

test("creates a country currency code lookup for an empty array", () => {
  const result = createLookup([]);

  expect(result).toEqual({});
});


test("creates a country currency code lookup for duplicate country codes", () => {
  const input = [
    ["US", "USD"],
    ["US", "USN"],
  ];
  const result = createLookup(input);

  expect(result).toEqual({
    US: "USN",
  });
});

test("creates a country currency code lookup for duplicate country codes", () => {
  const input = [
    ["US", "USD"],
    ["US", "USN"],
  ];
  const result = createLookup(input);

  expect(result).toEqual({
    US: "USN",
  });
});

test("creates a country currency code lookup for invalid input", () => {
  expect(() => createLookup(null)).toThrow();
  expect(() => createLookup(123)).toThrow();
  expect(() => createLookup("invalid input")).toThrow();
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
