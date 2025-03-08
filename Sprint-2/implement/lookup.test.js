const createLookup = require("./lookup.js");

// Given an array of arrays representing country code and currency code pairs,
// when createLookup function is called with the country-currency array as an argument
// returns object with [key, value] as [country code, currency code]
test("given appropriate array of arrays, returns object with country code and currency code", ()=>{
  expect(createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ]))
    .toEqual({
      US: "USD",
      CA: "CAD",
    });
});

// Given an array of only country codes ,
// when createLookup function is called with the array as an argument
// returns an error text
test("given array with only country codes, returns error", ()=>{
  expect(createLookup([ "US", "CA" ]))
    .toEqual("Wrong input! should be an array  of 2 item arrays");
});

// Given an empty array,
// when createLookup function is called with the array as an argument
// returns an error text
test("given empty array, returns empty object", ()=>{
  expect(createLookup([]))
    .toEqual({});
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
