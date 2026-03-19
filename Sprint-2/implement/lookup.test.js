const createLookup = require("./lookup.js");

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

describe("lookup", () => {
  const countryCurrencyArray = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["PAK", "RS"],
  ];
  const countryCurrencyObject = {
    US: "USD",
    CA: "CAD",
    PAK: "RS",
  };

  // CASE 1: Should return an object with key as country codes and value
  // as currency codes when an array is passed containing arrays of countries
  // codes and their currencies codes
  test(`should return an object of the array [${countryCurrencyArray}]`, () =>
    expect(createLookup(countryCurrencyArray)).toEqual(countryCurrencyObject));

  // CASE 2: Should return an empty object if empty array is passed
  test(`should return an empty object if the array is empty`, () =>
    expect(createLookup([[]])).toEqual({}));

  // CASE 3: Input is null
  test(`should throw an error if null is passed`, () =>
    expect(() => createLookup(null)).toThrow("Invalid Input"));
  // CASE 4: Input is undefined
  test(`should throw an error if undefined is passed`, () =>
    expect(() => createLookup(undefined)).toThrow("Invalid Input"));

  // CASE 5: Input is empty object {}
  test(`should throw an error if undefined is passed`, () =>
    expect(() => createLookup({})).toThrow("Invalid Input"));

  // CASE 5: Input is single value  {}
  test(`should throw an error if single value array is passed`, () =>
    expect(() => createLookup([123])).toThrow("Invalid Input"));
});
