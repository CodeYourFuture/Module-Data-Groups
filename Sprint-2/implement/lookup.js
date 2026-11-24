function createLookup(countryCurrencyPairs) {
  const lookup = Object.fromEntries(countryCurrencyPairs);
  return lookup;
}

module.exports = createLookup;
