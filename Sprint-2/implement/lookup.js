function createLookup(countryCurrencyPairs) {
  const currency = {};
  for (const [key, value] of countryCurrencyPairs) {
    currency[key] = value;
  }
  return currency;
}

module.exports = createLookup;
