const createLookup = require("./lookup.js");

test("creates a lookup from one country currency pair", () => {
  const countryCurrencyPairs = [["JP", "JPY"]];

  expect(createLookup(countryCurrencyPairs)).toEqual({
    JP: "JPY",
  });
});

test("creates a lookup for multiple country currency pairs", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["EN", "GBP"],
  ];

  expect(createLookup(countryCurrencyPairs)).toEqual({
    US: "USD",
    CA: "CAD",
    EN: "GBP",
  });
});

test("creates a lookup for a larger list of country currency pairs", () => {
  const countryCurrencyPairs = [
    ["FR", "EUR"],
    ["AU", "AUD"],
    ["CH", "CHF"],
    ["MX", "MXN"],
    ["SE", "SEK"],
  ];

  expect(createLookup(countryCurrencyPairs)).toEqual({
    FR: "EUR",
    AU: "AUD",
    CH: "CHF",
    MX: "MXN",
    SE: "SEK",
  });
});

test("creates an empty lookup when given an empty array", () => {
  expect(createLookup([])).toEqual({});
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
