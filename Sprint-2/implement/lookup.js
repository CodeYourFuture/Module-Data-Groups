
function createLookup(countryCurrencyPairs) {
  const lookup = {};
  for (const [country, currency] of countryCurrencyPairs) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;

