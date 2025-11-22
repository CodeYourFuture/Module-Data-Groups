const createLookup = require("./lookup.js")
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
//return an object
test('should return an object', () => { 
  expect(typeof createLookup([['US', 'USD'], ['CA', 'CAD']])).toBe('object');
})
//empty array
test('should handle empty array', () => { 
  const result = createLookup([]);
  expect(result).toEqual({});
})
//single entry
test("should handle single entry", () => {
  const result = createLookup([["FR", "EUR"]]);
  expect(result).toEqual({
    FR: "EUR",
  });
});
//multiple entries
test('should handle multiple entries', () => { 
  const result = createLookup([['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP']]);
  expect(result).toEqual({
    'US': 'USD',
    'CA': 'CAD',
    'GB': 'GBP'
  });
})
//duplicate country codes
test('should handle duplicate country codes by creating an array for the values', () => { 
  const result = createLookup([['US', 'USD'], ['CA', 'CAD'], ['US', 'USN']]);
  expect(result).toEqual({
    'US': ['USD', 'USN'],
    'CA': 'CAD'
  });
}) 
//special characters
test('should handle country codes with special characters', () => {
  const result = createLookup([['UK-1', 'GBP'], ['EU@27', 'EUR']]);
  expect(result).toEqual({
    'UK-1': 'GBP',
    'EU@27': 'EUR'
  });
})
//non-string country and currency codes
test('should omit non-string country and currency codes', () => {
  const result = createLookup([[1, 100], [2, 200]]);
  expect(result).toEqual({});
  const result2 = createLookup([['US', 100], [2, 'CAD']]);
  expect(result2).toEqual({})
})
//nested arrays
test('should handle nested arrays as values', () => {
  const result = createLookup([['US', ['USD', 'USN']], ['CA', ['CAD', 'CADN']]]);
  expect(result).toEqual({
    'US': ['USD', 'USN'],
    'CA': ['CAD', 'CADN']
  });
})  
//null and undefined values
test('should omit null and undefined values', () => {
  const result = createLookup([['US', null], ['CA', undefined]]);
  expect(result).toEqual({});
})
//insufficient elements
test('should omit array with insufficient elements', () => {
  const result = createLookup([['US', 'USD'], ['CA'], ['GB', 'GBP']]);
  expect(result).toEqual({
    'US': 'USD',
    'GB': 'GBP'
  });
})
//extra elements
test('should handle array with extra elements', () => {
  const result = createLookup([['US', 'USD', 'extra'], ['CA', 'CAD'], ['GB', 'GBP', 'extra2']]);
  expect(result).toEqual({
    'US': 'USD',
    'CA': 'CAD',
    'GB': 'GBP'
  });
})
//whitespace in country and currency codes
test('should handle whitespace in country and currency codes', () => {
  const result = createLookup([[' US ', ' USD '], [' CA ', ' CAD ']]);
  expect(result).toEqual({
    ' US ': ' USD ',
    ' CA ': ' CAD '
  });
})
//empty strings
test('should omit empty strings as country and currency codes', () => {
  const result = createLookup([['', ''], ['CA', 'CAD']]);
  expect(result).toEqual({
    'CA': 'CAD'
  });
})
//invalid array elements
test('should handle array with non-array and insufficient/extra elements', () => {
  const result = createLookup([['US', 'USD'], 'invalid', ['CA'], ['GB', 'GBP']]);
  expect(result).toEqual({
    'US': 'USD',
    'GB': 'GBP'
  });
  const result2 = createLookup([
    ["US", "USD", "extra"],
    "invalid",
    ["CA", "CAD"],
    ["GB", "GBP", "extra2"],
  ]);
  expect(result2).toEqual({
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  });
})
//incorrect argument types
test('should return empty object for non-array arguments', () => {
  expect(createLookup(null)).toEqual({});
  expect(createLookup(undefined)).toEqual({});
  expect(createLookup(123)).toEqual({});
  expect(createLookup('string')).toEqual({});
  expect(createLookup({})).toEqual({});
})
//no arguments
test('should throw error when no arguments are provided', () => {
  expect(() => createLookup()).toThrow('No arguments provided');
})