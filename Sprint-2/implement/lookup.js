function createLookup(countryCurrencyPairs) {
  const lookup = {};
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }
  for (const [country, currency] of countryCurrencyPairs) {
    if (typeof country !== "string" || typeof currency !== "string") {
      continue; // Skip invalid pairs
    }
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
