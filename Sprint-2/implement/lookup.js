function createLookup(countryCurrency) {
  const lookup = {};

  for (const pair of countryCurrency) {
    const [countryCode, currencyCode] = pair;
    lookup[countryCode] = currencyCode;
  }
  return lookup
}

module.exports = createLookup;
