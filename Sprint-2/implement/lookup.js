function createLookup(countryCurrencyPairs) {
  // implementation here
  const currencyLookup = {};
  for (const [country, currency] of countryCurrencyPairs) {
    currencyLookup[country] = currency;
  }
  return currencyLookup;
}

module.exports = createLookup;
