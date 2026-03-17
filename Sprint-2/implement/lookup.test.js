const createLookup = require("./lookup.js");

// Case 1: Returns country currency code lookup for a single country-currency pair
test("creates a country currency code lookup for a single code pair", () => {
  const countryCurrencyPairs = [["US", "USD"]];

  const currencyObj = createLookup(countryCurrencyPairs);

  expect(currencyObj).toEqual({
    US: "USD",
  });
});

// Case 2: Returns country currency codes lookup for multiple country-currency pairs
test("creates a country currency code lookup for multiple codes", () => {
  try {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GB", "GBP"],
      ["ZA", "ZAR"],
      ["NG", "NGN"],
    ];

    const currencyObj = createLookup(countryCurrencyPairs);

    expect(currencyObj).toEqual({
      US: "USD",
      CA: "CAD",
      GB: "GBP",
      ZA: "ZAR",
      NG: "NGN",
    });
  } catch (error) {
    throw new Error(
      `Failed to create the currency lookup object for ${JSON.stringify(countryCurrencyPairs)}: ${error.message}`
    );
  }
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
