const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];
    const result = createLookup(input);

    expect(result).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });

  test("returns empty object for empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("handles a single pair", () => {
    const input = [["GB", "GBP"]];
    expect(createLookup(input)).toEqual({
      GB: "GBP",
    });
  });

  test("ignores invalid pairs (not arrays)", () => {
    const input = [["US", "USD"], "invalid", null];
    expect(createLookup(input)).toEqual({
      US: "USD",
    });
  });

  test("ignores pairs that do not have exactly two elements", () => {
    const input = [["US", "USD"], ["CA"], ["MX", "MXN", "extra"]];
    expect(createLookup(input)).toEqual({
      US: "USD",
    });
  });

  test("overwrites duplicate country codes with the latest value", () => {
    const input = [
      ["US", "USD"],
      ["US", "USN"],
    ];
    expect(createLookup(input)).toEqual({
      US: "USN",
    });
  });

  test("returns empty object for invalid input (not an array)", () => {
    expect(createLookup(null)).toEqual({});
    expect(createLookup({})).toEqual({});
    expect(createLookup("string")).toEqual({});
  });
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
