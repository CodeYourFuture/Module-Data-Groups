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

test("when passed an empty array, throw an error", () => {
  expect(() => {
    createLookup([]);
  }).toThrow("country and currency code not entered");
});

test("when given an array of arrays containing two elements, returns an object of key-value pairs", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["NG", "NIG"],
  ];
  const expected = {
    US: "USD",
    CA: "CAD",
    NG: "NIG",
  };
  const result = createLookup(input);
  expect(result).toEqual(expected);
});

test.each(["hello", 123, true, null, undefined, {}])(
  "throws an error when input is %p",
  (input) => {
    expect(() => {
      createLookup(input);
    }).toThrow("invalid data type entered");
  }
);

test("when given an array containing more than 2 elements, throw error", () => {
  const input = [["US", "USD", "U"]];
  expect(() => {
    createLookup(input);
  }).toThrow(
    "Each inner array must contain exactly two elements: a key and a value"
  );
});

test("when given an array, if country code !=== currency code, throw an error", () => {
  expect(() => {
    createLookup([["US", "US"]]);
  }).toThrow("Country code and currency code cannot be the same");
});
