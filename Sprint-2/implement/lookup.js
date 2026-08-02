function createLookup(countryCurrencyPairs) {
  pairs = {};
  for (const [country, currency] of countryCurrencyPairs) {
    pairs[country] = currency;
  }
  return pairs;
}

module.exports = createLookup;
