function createLookup(CountryCurrencyPairs) {
  const result = {};

  for (const pair of CountryCurrencyPairs) {
    const [country, currency] = pair;
    result[country] = currency;
  }
  return result;
}
module.exports = createLookup;
