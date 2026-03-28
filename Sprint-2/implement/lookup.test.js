const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  const input = [['US', 'USD'], ['CA', 'CAD'], ['GB', 'GBP'], ['JP', 'JPY']];
  const expected = {
    'US': 'USD',
    'CA': 'CAD',
    'GB': 'GBP',
    'JP': 'JPY'
  };
  expect(createLookup(input)).toEqual(expected);
});

test("creates a lookup for a single pair", () => {
  const input = [['FR', 'EUR']];
  const expected = {
    'FR': 'EUR'
  };
  expect(createLookup(input)).toEqual(expected);
});

test("returns empty object for empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("handles invalid input gracefully", () => {
  expect(createLookup(null)).toEqual({});
  expect(createLookup(undefined)).toEqual({});
  expect(createLookup("not an array")).toEqual({});
  expect(createLookup(123)).toEqual({});
});

test("ignores pairs that are not arrays or have insufficient length", () => {
  const input = [
    ['US', 'USD'], 
    ['CA'], // Invalid - insufficient length (only 1 element)
    'invalid', // Invalid - not an array
    ['GB', 'GBP'], 
    [1] // Invalid - insufficient length (only 1 element)
  ];
  const expected = {
    'US': 'USD',
    'GB': 'GBP'
  };
  expect(createLookup(input)).toEqual(expected);
});

test("handles when country codes are not strings", () => {
  const input = [
    [1, 'USD'],
    ['CA', 'CAD']
  ];
  const expected = {
    '1': 'USD',
    'CA': 'CAD'
  };
  expect(createLookup(input)).toEqual(expected);
});
