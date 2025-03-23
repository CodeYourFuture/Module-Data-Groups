function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Input must be an array of country-currency pairs");
  }

  return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    lookup[country] = currency;
    return lookup;
  }, {});
}

module.exports = createLookup;
