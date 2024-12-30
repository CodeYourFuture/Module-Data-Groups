const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
  expect(createLookup([['US', 'USD'], ['CA', 'CAD']])).toEqual({
    'US': 'USD',
    'CA': 'CAD'
  });
});

test("returns an empty object for an empty array", () => {
  expect(createLookup([])).toEqual({});
});
test("correctly handles various country and currency codes", () => {
  expect(createLookup([['GB', 'GBP'], ['IN', 'INR'], ['AU', 'AUD'], ['JP', 'JPY']])).toEqual({
    'GB': 'GBP',
    'IN': 'INR',
    'AU': 'AUD',
    'JP': 'JPY'
  });
});