function createLookup() {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }
  return Object.fromEntries(countryCurrencyPairs);
}

module.exports = createLookup;
