function createLookup(countryCurrencyPairs) {
  const lookup = {};

  countryCurrencyPairs.forEach(([country, currency]) => {
    lookup[country] = currency;
  });

  return lookup;
}

module.exports = createLookup;
