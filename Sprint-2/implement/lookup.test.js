// const createLookup = require("./lookup.js");

// test.todo("creates a country currency code lookup for multiple codes");

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


//answer
const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country-currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["JP", "JPY"],
    ];
    const expectedOutput = {
      US: "USD",
      CA: "CAD",
      JP: "JPY",
    };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test("returns an empty object for an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("handles single pair correctly", () => {
    const input = [["GB", "GBP"]];
    const expectedOutput = { GB: "GBP" };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test("overwrites duplicate country codes with the last currency", () => {
    const input = [
      ["US", "USD"],
      ["US", "USN"],
    ];
    const expectedOutput = { US: "USN" };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test("ignores invalid entries", () => {
    const input = [
      ["FR", "EUR"],
      ["INVALID"], // invalid entry
      ["DE", "EUR"],
    ];
    const expectedOutput = {
      FR: "EUR",
      DE: "EUR",
    };
    expect(createLookup(input)).toEqual(expectedOutput);
  });
});
