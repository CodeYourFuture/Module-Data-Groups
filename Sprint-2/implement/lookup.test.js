const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
    const expectedLookup = {
      'US': 'USD',
      'CA': 'CAD'
    };
    expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
  });
});

test("creates a country currency code lookup for a single code", () => {
  const countryCurrencyPairs = [['GB', 'GBP']];
  const expectedLookup = {
    'GB': 'GBP'
  };
  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});

test("creates an empty lookup for an empty array", () => {
  const countryCurrencyPairs = [];
  const expectedLookup = {};
  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});

test("creates a country currency code lookup for multiple codes with different currencies", () => {
  const countryCurrencyPairs = [['JP', 'JPY'], ['AU', 'AUD'], ['IN', 'INR']];
  const expectedLookup = {
    'JP': 'JPY',
    'AU': 'AUD',
    'IN': 'INR'
  };
  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});

test("creates an array of array representing country code and currency code pairs", () => {
  const countryCurrencyPairs = [['FR', 'EUR'], ['DE', 'EUR'], ['IT', 'EUR']];
  const expectedLookup = {
    'FR': 'EUR',
    'DE': 'EUR',
    'IT': 'EUR'
  };
  expect(createLookup(countryCurrencyPairs)).toEqual(expectedLookup);
});

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]
   tes
   

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
