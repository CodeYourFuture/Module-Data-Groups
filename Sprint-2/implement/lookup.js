function createLookup(countryCurrencyPairs) {
  const lookup = {};

  if (!Array.isArray(countryCurrencyPairs)) return lookup;

  countryCurrencyPairs.forEach((pair) => {
    if (!Array.isArray(pair)) return;
    if (pair.length < 2) return;
    const [country, currency] = pair;
    if (country == null || currency == null) return;
    lookup[country] = currency;
  });

  return lookup;
}

module.exports = createLookup;
