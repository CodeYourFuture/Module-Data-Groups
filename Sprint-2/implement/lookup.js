function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Input must be an array of arrays");
  }

  return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    if (typeof country !== "string" || typeof currency !== "string") {
      throw new Error("Each pair must contain two strings");
    }
    lookup[country] = currency;
    return lookup;
  }, {});
}

module.exports = createLookup;
