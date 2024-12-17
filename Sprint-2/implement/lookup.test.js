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

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD'], ['ZA', 'ZAR'], ['AU', 'AUD']];

  expect(createLookup(countryCurrencyPairs)).toEqual(
    {
      'US': 'USD',
      'CA': 'CAD',
      'ZA': 'ZAR',
      'AU': 'AUD',
    }
  )
});

test("logs error for incomplete pair", () => {
  const countryCurrencyPairs = [
    ['US', 'USD'],
    ['CA', 'CAD'],
    ['GB']
  ];

  expect(createLookup(countryCurrencyPairs)).toEqual({
    'US': 'USD',
    'CA': 'CAD'
  });
  //an error log in the console for the incomplete pair
});

test("returns an empty object for empty input", () => {
  const countryCurrencyPairs = [];

  const result = createLookup(countryCurrencyPairs);

  //object to be empty
  expect(result).toEqual({});
});

//GPT recommended to use console.error and the jest.fn
test("logs an error for invalid pairs", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA'], ['GB', 'GBP']];

  // Capture console.error
  console.error = jest.fn();

  createLookup(countryCurrencyPairs);

  // Check that an error was logged for the invalid pair
  expect(console.error).toHaveBeenCalledWith('Invalid input CA');
});

test("logs an error for non-array input", () => {
  const invalidInput = "This is not an array";

  // Capture console.error
  console.error = jest.fn();
  createLookup(invalidInput);

  // Check that an error was logged
  expect(console.error).toHaveBeenCalledWith('Invalid input, this is not an array of arrays This is not an array');
});
