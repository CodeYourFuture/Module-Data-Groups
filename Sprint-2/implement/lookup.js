function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((lookup, [countryCode, currencyCode]) => {
    lookup[countryCode] = currencyCode;
    return lookup;
  }, {});
}

module.exports = createLookup;
