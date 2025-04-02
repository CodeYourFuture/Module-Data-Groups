const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

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


//MY RESPONSE

// Implement the createLookup function to handle country-currency pairs

function createLookup(pairs) {
  const lookup = {}; // Initialize an empty object to hold the key-value pairs
  for (const [country, currency] of pairs) {
    lookup[country] = currency; // Use the country as the key and the currency as the value
  }
  return lookup; // Return the created lookup object
}

module.exports = createLookup;

// Test case for the createLookup function

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual({
    'US': 'USD',
    'CA': 'CAD',
  });
});
