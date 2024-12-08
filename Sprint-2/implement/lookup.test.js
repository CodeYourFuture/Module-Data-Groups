const createLookup = require("./lookup");

describe("createLookup function", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
    const expected = {
      'US': 'USD',
      'CA': 'CAD'
    };
    expect(createLookup(countryCurrencyPairs)).toEqual(expected);
  });

  test("creates a lookup for a single pair", () => {
    const countryCurrencyPairs = [['IN', 'INR']];
    const expected = {
      'IN': 'INR'
    };
    expect(createLookup(countryCurrencyPairs)).toEqual(expected);
  });

  test("creates an empty lookup for an empty array", () => {
    const countryCurrencyPairs = [];
    const expected = {};
    expect(createLookup(countryCurrencyPairs)).toEqual(expected);
  });
});
