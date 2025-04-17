const createLookup = require("./lookup.js");

describe('creates a country currency code lookup for multiple codes', () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];


  test('when called with country-currency array, it returns an object with country: currency', () => {
    expect(createLookup(countryCurrencyPairs)).toEqual({
      'US': 'USD',
      'CA': 'CAD'
    });
  })})