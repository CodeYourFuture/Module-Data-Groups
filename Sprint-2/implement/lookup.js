function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Invalid input");
  }

  const lookup = {};
  for (const [country, currency] of countryCurrencyPairs) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
