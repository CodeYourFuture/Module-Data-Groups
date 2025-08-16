function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new TypeError("Input must be country: currency pairs");
  }

  return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    if (typeof country !== "string" || typeof currency !== "string") {
      throw new TypeError("Only strings entries are allowed");
    }
    lookup[country] = currency;
    return lookup;
  }, {});
}

module.exports = createLookup;
