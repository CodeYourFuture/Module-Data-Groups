function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) return {};
  return countryCurrencyPairs.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

module.exports = createLookup;
