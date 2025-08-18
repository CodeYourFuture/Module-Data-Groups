function createLookup(currencyPairs) {
  const lookup = {};
  if (!Array.isArray(currencyPairs)) return lookup;

  for (const pair of currencyPairs) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [countryCode, currencyCode] = pair;
      lookup[countryCode] = currencyCode;
    }
  }

  return lookup;
}

module.exports = createLookup;
