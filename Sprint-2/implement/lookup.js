function createLookup(countryCurrencyPairs) {
  // implementation here
  const lookup = {};

  for (const pair of countryCurrencyPairs) {
    const [countryCode, currencyCode] = pair;
    lookup[countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup;

module.exports = createLookup;
