const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

describe("createLookup", () => {
  test("should throw an error if elements are not arrays", () => {
    expect(() => createLookup(["US USD CA CAD"])).toThrow(
      "Each element in the array must be an array with exactly two elements."
    );
  });

  test("should throw an error if inner arrays do not have exactly two elements", () => {
    expect(() => createLookup([["US", "USD"], ["CA"]])).toThrow(
      "Each element in the array must be an array with exactly two elements."
    );
    expect(() => createLookup([["US", "USD", "CA"]])).toThrow(
      "Each element in the array must be an array with exactly two elements."
    );
  });

  test("returns an empty object when given an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("returns an object with correct key-value pairs for a single country-currency pair", () => {
    expect(createLookup([["US", "USD"]])).toEqual({ US: "USD" });
  });

  test("creates a country currency code lookup for multiple codes", () => {
    expect(
      createLookup([
        ["US", "USD"],
        ["CA", "CAD"],
      ])
    ).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });
});

/*
Create a lookup object of key-value pairs from an array of code pairs
...
*/

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
