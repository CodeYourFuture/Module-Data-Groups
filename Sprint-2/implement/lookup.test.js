const createLookup = require("./lookup.js");


describe('createLookup function', () => {

test("creates a country currency code lookup for multiple codes", () =>{
      const dataCurrency = [['MAR','MAD'],['US', 'USD'], ['CA', 'CAD']];
    const result = createLookup(dataCurrency);
    expect(result).toEqual({
      'MAR': 'MAD',
      'US': 'USD',
      'CA': 'CAD'
    });
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
  test("handles an empty array input", () => {
    const emptyArray = [];
    const result = createLookup(emptyArray);
    expect(result).toEqual({});
  });

    test("handles a single country currency pair", () => {
    const singlePair = [['JP', 'JPY']];
    const result = createLookup(singlePair);
    expect(result).toEqual({
      'JP': 'JPY'
    });
  });
