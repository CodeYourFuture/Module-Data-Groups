function createLookup(countryCurrencyPairs) {
  const lookup = {};
  for (const [countryCode, currencyCode] of countryCurrencyPairs) {
    lookup[countryCode] = currencyCode;
  }
  return lookup;
}

module.exports = createLookup;
