function createLookup(countryCurrencyPairs) {
  const objCountryCurrencyPairs = {};

  for (const [country, currency] of countryCurrencyPairs) {
    objCountryCurrencyPairs[country] = currency;
  }

  return objCountryCurrencyPairs;
}

module.exports = createLookup;
