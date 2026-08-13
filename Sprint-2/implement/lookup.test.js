const createLookup = require("./lookup.js");

test("creates a country currency code lookup object for multiple codes", () => {
  const result = createLookup([
    ["US", "USD"],
    ["UAE", "AED"],
    ["ERI", "ERN"],
  ]);

  expect(result).toEqual({
    US: "USD",
    UAE: "AED",
    ERI: "ERN",
  });
});

/* test("prints country and currency vertically", () => {
  console.log = jest.fn(); //mocks the console.log which is used to print out only returned values, but since this test only checks the printed output but not returned values, we do mock the console.log to check the printed output

  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ]);

  expect(console.log).toHaveBeenCalledWith("US: USD");
  expect(console.log).toHaveBeenCalledWith("CA: CAD");
});
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
