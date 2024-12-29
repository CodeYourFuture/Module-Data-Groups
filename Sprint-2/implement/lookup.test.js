const createLookup = require("./lookup.js");

test("creates a country-currency lookup object from an array of pairs", () => {
  // 〰️ Arrange: Define input and expected output
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const expectedOutput = {
    'US': 'USD',
    'CA': 'CAD'
  };

  // 〰️ Act: Call the function with input
  const result = createLookup(input);
  
  // 〰️ Assert: Check if the result matches expected output
  expect(result).toEqual(expectedOutput);
});

test("returns an empty object if input is empty", () => {
    expect(createLookup([])).toEqual({});
  });


test("handles multiple entries correctly", () => {
    const input = [['IN', 'INR'], ['JP', 'JPY'], ['GB', 'GBP']];
    const expectedOutput = {
      'IN': 'INR',
      'JP': 'JPY',
      'GB': 'GBP'
    };
    expect(createLookup(input)).toEqual(expectedOutput);
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
