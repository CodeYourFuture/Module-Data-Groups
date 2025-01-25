

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
// Function implementation


// Test cases

// Import the function to test
const createLookup = require('./lookup'); // Replace './createLookup' with the correct file path

// Test Suite for createLookup
describe('createLookup', () => {
  
  test('should return a lookup object for a valid input', () => {
    const input = [['US', 'USD'], ['CA', 'CAD']];
        const expectedOutput = { US: 'USD', CA: 'CAD' };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

     test('should return an empty object for an empty input array', () => {
  const input = [];
    const expectedOutput = {};
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test('should overwrite duplicate keys with the last occurrence', () => {
    const input = [['US', 'USD'], ['US', 'USDT']];
       const expectedOutput = { US: 'USDT' };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test('should handle input with multiple key-value pairs', () => {
    const input = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP'], ['EU', 'EUR']];
    const expectedOutput = { US: 'USD', CA: 'CAD', GB: 'GBP', EU: 'EUR' };
    expect(createLookup(input)).toEqual(expectedOutput);
  });

  test('should handle keys and values with unusual strings', () => {
    const input = [['', 'EMPTY'], ['123', 'NUMERIC'], ['special!@#', 'SPECIAL']];
    const expectedOutput = { '': 'EMPTY', '123': 'NUMERIC', 'special!@#': 'SPECIAL' };
    expect(createLookup(input)).toEqual(expectedOutput);
  });
});
