function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    lookup[country] = currency;
    return lookup;
  }, {});
}

module.exports = createLookup;
