const createLookup = require("./lookup.js");

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
// Case 1: Valid input

test("returns an object with country codes as keys and currency codes as values", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const expected = { US: "USD", CA: "CAD" };

  expect(createLookup(input)).toEqual(expected);
});

// Case 2: Empty array

test("returns an empty object when an empty array is passed", () => {
  expect(createLookup([])).toEqual({});
});

// Case 3: Input not an array

test("throws an error when input is not an array", () => {
  expect(() => createLookup("not an array")).toThrow(
    "Input must be an array of [country, currency] pairs"
  );
});

// Case 4: Input null or undefined

test("throws an error when input is null or undefined", () => {
  expect(() => createLookup(null)).toThrow(
    "Input must be an array of [country, currency] pairs"
  );
  expect(() => createLookup(undefined)).toThrow(
    "Input must be an array of [country, currency] pairs"
  );
});

// Case 5: type of Input elements are not strings 

  test("throws an error if inner array elements are not valid strings", () => {
    const invalidInput = [['US', 'USD'], ['CA', 123], ['JP', null]];
    expect(() => createLookup(invalidInput)).toThrow(
      "Each item must be an array of [country, currency]"
    );
  });

// In lookup.test.js test cases added and passed. 