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

describe("createLookup", () => {
  test("Return an object with country codes and currency codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const output = {
      US: "USD",
      CA: "CAD",
    };
    expect(createLookup(input)).toEqual(output);
  });
  test("Ignores invalid inner arrays", () => {
    const input = [["US", "USD"], "Hello", ["CA", "CAD"]];
    const output = {
      US: "USD",
      CA: "CAD",
    };
    expect(createLookup(input)).toEqual(output);
  });
  test("returns empty object for empty inner arrays", () => {
    expect(createLookup([[]])).toEqual({});
  });
  test("Handle repeat keys", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["US", "US-Dollar"],
    ];
    const output = {
      US: "US-Dollar",
      CA: "CAD",
    };
    expect(createLookup(input)).toEqual(output);
  });

  test("Return an empty object with invalid input", () => {
    expect(() => createLookup(null)).toThrow();
    expect(() => createLookup("Hello World")).toThrow();
    expect(() => createLookup({})).toThrow();
  });
  test("Return an empty object with empty input", () => {
    expect(createLookup([])).toEqual({});
  });
});
