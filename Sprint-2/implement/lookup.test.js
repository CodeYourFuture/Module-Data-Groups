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
//test cases:
//test 1:
test("creates a valid lookup object from country-currency pairs", () => {
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const expectedOutput = { US: 'USD', CA: 'CAD' };
  expect(createLookup(input)).toEqual(expectedOutput);
});
//test 2:
test("throws an error when input is not an array of arrays", () => {
  expect(() => createLookup("US, USD")).toThrow("Invalid input: Must be an array of arrays.");
  expect(() => createLookup({ US: "USD" })).toThrow("Invalid input: Must be an array of arrays.");
  expect(() => createLookup(123)).toThrow("Invalid input: Must be an array of arrays.");
});
//test 3:
test("throws an error when pairs don't have exactly two elements", () => {
  expect(() => createLookup([['US']])).toThrow(
    "Invalid pair: Each pair must contain exactly two elements. Found: [\"US\"]"
  );
  expect(() => createLookup([['US', 'USD', 'Dollar']])).toThrow(
    "Invalid pair: Each pair must contain exactly two elements. Found: [\"US\",\"USD\",\"Dollar\"]"
  );
});
//test 4:
test("throws an error when duplicate country codes are detected", () => {
  expect(() => createLookup([['US', 'USD'], ['US', 'Dollar']])).toThrow(
    "Duplicate country code detected: 'US'"
  );
});
//test 5:
test("returns an empty object for an empty input array", () => {
  expect(createLookup([])).toEqual({});
});

