const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes",()=>{
  const array = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const result = createLookup(array);
  expect(result).toEqual({
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  });
}
);

test("input array is empty", () => {
  const array = [];
  const result = createLookup(array);
  expect(result).toEqual({});
});
 
test("The input is an array but doesn't contain array elements", () => {
  const array = [1,2,3,4];
  const result = createLookup(array);
  expect(result).toEqual(false);
});

test("ُThe input is not an array", () => {
  const array ="US-USD" ;
  const result = createLookup(array);
  expect(result).toEqual(false);
});

test("ُThe input is  an array of strings", () => {
  const array = ["US:USD","CA:CAD"];
  const result = createLookup(array);
  expect(result).toEqual(false);
});

test("creates a country currency code lookup for one array", () => {
  const array = [["US", "USD"]];
  const result = createLookup(array);
  expect(result).toEqual({US: "USD"});
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
