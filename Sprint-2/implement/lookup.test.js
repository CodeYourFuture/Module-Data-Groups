const createLookup = require("./lookup.js");

describe("when given invalid inputs", () => {
  test("should return invalid input error, if the input is an empty array", () => {
    expect(() => createLookup([])).toThrow(
      "Input should not be an empty array"
    );
  });
  test("should return invalid input error, if the input isn't an array of arrays", () => {
    expect(() => createLookup(["hi", "hello"])).toThrow(
      "Invalid input. All elements should be arrays"
    );
  });
  test("should return invalid input error, if the input isn't an array of arrays", () => {
    expect(() => createLookup("hi")).toThrow(
      "Invalid input. It should be an array"
    );
  });
  test("should return invalid input error, if the input isn't an array of arrays", () => {
    expect(() => createLookup(2)).toThrow(
      "Invalid input. It should be an array"
    );
  });
});

describe("when given valid inputs", () => {
  test("should return an object where (Input ==> Output): keys:values ==> country code: corresponding currency", () => {
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

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing when given invalid inputs code pairs
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
