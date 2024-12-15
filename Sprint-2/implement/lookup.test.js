//const createLookup = require("./lookup.js");

//test.todo("creates a country currency code lookup for multiple codes");

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
const createLookup = require("./lookup");

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["MX", "MXN"],
  ];

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({
    US: "USD",
    CA: "CAD",
    MX: "MXN",
  });
});

test("handles an empty array", () => {
  const countryCurrencyPairs = [];

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({});
});

test("throws an error if input is not an array", () => {
  expect(() => createLookup(null)).toThrow("Input must be an array of country-currency pairs");
  expect(() => createLookup("invalid"))
    .toThrow("Input must be an array of country-currency pairs");
});

test("handles duplicate country codes by overwriting with the latest value", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["US", "USN"],
  ];

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({
    US: "USN",
    CA: "CAD",
  });
});

test("handles country codes with falsy or empty string values", () => {
  const countryCurrencyPairs = [
    ["", "Unknown"],
    [null, "Invalid"],
    ["US", "USD"],
  ];

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({
    "": "Unknown",
    null: "Invalid",
    US: "USD",
  });
});

test("handles non-string country and currency codes", () => {
  const countryCurrencyPairs = [
    [123, 456],
    ["US", "USD"],
  ];

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({
    123: 456,
    US: "USD",
  });
});
