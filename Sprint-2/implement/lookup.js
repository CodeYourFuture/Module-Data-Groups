function createLookup(countryCurrencyPairs) {
  const lookup = {};
  countryCurrencyPairs.forEach(pair => {
    const [country, currency] = pair;
    lookup[country] = currency;
  });
  return lookup;
}

module.exports = createLookup;