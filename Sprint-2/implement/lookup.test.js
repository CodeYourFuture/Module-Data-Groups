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
  it("returns empty object if the parameter passed is not an array", () => {
    expect(createLookup("US:USD")).toEqual({});
    expect(createLookup(undefined)).toEqual({});
  });

  it("returns an object of country initials and currency code", () =>
    expect(
      createLookup([
        ["US", "USD"],
        ["CA", "CAD"],
      ])
    ).toEqual({
      US: "USD",
      CA: "CAD",
    }));

  it("returns an empty object if passed an empty array", () =>
    expect(createLookup([])).toEqual({}));
});
