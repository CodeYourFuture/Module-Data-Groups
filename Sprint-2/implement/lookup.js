function createLookup(countryCurrencyPairs) {
  let lookup = {};
  for (let [country, currency] of countryCurrencyPairs) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
