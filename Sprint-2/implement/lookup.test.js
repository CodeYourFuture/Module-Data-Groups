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

describe("createLookup", () => {
  test("maps country codes to currency codes", () => {
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

  test.each([
    [
      "throws when input array is empty",
      [],
      "Input must not be an empty array",
    ],
    ["throws when input is not an array", "hello", "Input must be an array"],
    [
      "throws when input pairs are invalid",
      [1, 2, 3],
      "Input must be valid text pairs",
    ],
    [
      "throws when duplicate pairs are provided",
      [
        ["US", "USD"],
        ["US", "USD"],
      ],
      "Input must not be duplicated",
    ],
  ])("%s", (_title, data, expecteMessage) => {
    expect(() => createLookup(data)).toThrow(expecteMessage);
  });

  test("throws when country code format is incorrect", () => {
    expect(() => createLookup([["us", "USD"]])).toThrow(
      "Country code must be 2 uppercase letters"
    );
  });

  test("throws when currency code format is incorrect", () => {
    expect(() => createLookup([["US", "usd"]])).toThrow(
      "Currency code must be 3 uppercase letters"
    );
  });
});
