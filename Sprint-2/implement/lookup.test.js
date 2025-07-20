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

test("throws error when createLookup is given an empty array", () => {
  const input = [];
  const currentOutput = createLookup(input);
  const targetOutput = "array is empty";
  expect(currentOutput).toStrictEqual(targetOutput)

})

test("handel the case when createLookup has only one array inside an array", () => {
  const input = [['US', 'USD']];
  const currentOutput = createLookup(input);
  const targetOutput = {'US': 'USD'};
  expect(currentOutput).toStrictEqual(targetOutput)

})

test("handel the case when createLookup has more than one array inside an array", () => {
  const input = [['US', 'USD'], ['CA', 'CAD']];
  const currentOutput = createLookup(input);
  const targetOutput = {'US': 'USD', 'CA': 'CAD'};
  expect(currentOutput).toStrictEqual(targetOutput)

})
