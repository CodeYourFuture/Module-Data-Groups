const createLookup = require("./lookup.js");

describe("edge cases of the lookup function", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const currentOutput = createLookup([
      ["country", "currency"],
      ["country1", "currency1"],
      ["country2", "currency2"],
    ]);
    const targetOutput = {
      country: "currency",
      country1: "currency1",
      country2: "currency2",
    };
    expect(currentOutput).toStrictEqual(targetOutput);
  });

  test("creates a country currency code lookup for empty array", () => {
    // const currentOutput = createLookup([]);
    // const targetOutput =
    expect(() => createLookup([])).toThrow(
      "The array is not array or it is empty."
    );
  });

  test("creates a country currency code lookup for array with wrong type key-value pairs", () => {
    // const currentOutput = createLookup([
    // [3, 2],
    //  [3, 1],
    // ]);
    // const targetOutput = "The type of key-value pair is not string.";
    expect(() =>
      createLookup([
        [3, 2],
        [3, 1],
      ])
    ).toThrow("The type of key-value pair is not string.");
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
