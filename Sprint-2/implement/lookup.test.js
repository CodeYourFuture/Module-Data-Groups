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

// Standard input

test("creates a country currency code lookup for multiple codes", () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']];
  const expectedOutput = { US: 'USD', CA: 'CAD', GB: 'GBP' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

// Empty input

test("returns an empty object when given an empty array", () => {
  expect(createLookup([])).toEqual({});
});

// Duplicate Country Code

test("uses the last currency code when duplicate country codes are provided", () => {
  const input = [['US', 'USD'], ['US', 'USN']];
  const expectedOutput = { US: 'USN' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

//  Handles lowercase or mixed-case country codes

test("treats lowercase country codes as valid keys", () => {
  const input = [['us', 'USD'], ['ca', 'CAD']];
  const expectedOutput = { us: 'USD', ca: 'CAD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

// Handles special characters in codes

test("handles country codes with special characters", () => {
  const input = [['U$1', 'U$D'], ['C@1', 'C@D']];
  const expectedOutput = { 'U$1': 'U$D', 'C@1': 'C@D' };
  expect(createLookup(input)).toEqual(expectedOutput);
});

// Handles very large input

test("correctly handles a large number of entries", () => {
  const input = Array.from({ length: 1000 }, (_, i) => [`C${i}`, `CUR${i}`]);
  const expectedOutput = Object.fromEntries(input);
  expect(createLookup(input)).toEqual(expectedOutput);
});

/*

I implemented the createLookup function to convert an array of country–currency code pairs into a JavaScript object.
The function uses a basic for...of loop with array destructuring to assign each
country code as a key and the corresponding currency code as its value.  I also wrote a set of 
Jest tests to verify the function’s correctness across several cases, including:

- Standard inputs
- Empty input
- Duplicate country codes
- Lowercase codes
- Special characters
- A large dataset of 1000 entries

The function passed all tests, confirming it works as expected for a variety of valid inputs.

*/




