const createLookup = require("./lookup.js");
describe("createLookup",()=>{
  it("creates an object from country/currency pairs", ()=>{   expect(createLookup([["US", "USD"],["CA", "CAD"],])).toEqual({US:"USD",CA:"CAD"});  });

  it("returns an empty object for an empty array",()=>{ expect(createLookup([])).toEqual({}) });
  
  it("returns 'Invalid input' for non-array inputs",()=>{ 
    expect(createLookup("CYF")).toBe("Invalid input");
      expect(createLookup(123)).toBe("Invalid input");
        expect(createLookup(null)).toBe("Invalid input");
  });
 
   it("overwrites repeated keys with the last value",()=>
    {expect(createLookup([["US","USD"],["US","USD"]])).toEqual({US:"USD"})  });
} )

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
