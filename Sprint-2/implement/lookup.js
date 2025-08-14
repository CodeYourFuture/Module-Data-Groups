function createLookup(pairsArray) {
  const lookup = {};

  for (const [countryCode, currencyCode] of pairsArray) {
    lookup[countryCode] = currencyCode;
  }
  return lookup;
}

module.exports = createLookup;
