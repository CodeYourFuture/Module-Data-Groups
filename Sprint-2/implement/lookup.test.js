const createLookup = require("./lookup.js");

//test.todo("creates a country currency code lookup for multiple codes");

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
//tbh this was hard to understand and its taken me a while to get it.


describe('createLookup', () => {
  it('should return an empty object for an empty input array', () => {
    expect(createLookup([])).toEqual({});
  }); //the first test passes. could not resist writing the function finished (i think). make more tests to check

  it('should create a lookup object from valid country-currency pairs', () => {
    const pairs = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']];
    const expectedLookup = {
      US: 'USD',
      CA: 'CAD',
      GB: 'GBP',
    };
    expect(createLookup(pairs)).toEqual(expectedLookup);
  });

    it('should handle duplicate country codes by using the last occurrence', () => {
        const pairs = [['US', 'USD'], ['CA', 'CAD'], ['US', 'PESO']];
        const expectedLookup = {
            US: 'PESO',
            CA: 'CAD',
        };
        expect(createLookup(pairs)).toEqual(expectedLookup);
    });

    it('should handle empty strings as country or currency codes', () => {
        const pairs = [['', 'USD'], ['CA', '']];
        const expectedLookup = {
            "": 'USD',
            CA: '',
        };
        expect(createLookup(pairs)).toEqual(expectedLookup);
    });

    it('should handle non-string values gracefully', () => {
        const pairs = [[1, 123], [true, false]];
        const expectedLookup = {
            1: 123,
            true: false
        };
        expect(createLookup(pairs)).toEqual(expectedLookup);
    });

    it('should handle an array of only one pair', () => {
        const pairs = [["ZA", "RAND"]]
        const expectedLookup = {
            ZA: "RAND"
        }
        expect(createLookup(pairs)).toEqual(expectedLookup)
    }) //call the big five and let them know we got Randelas

});
