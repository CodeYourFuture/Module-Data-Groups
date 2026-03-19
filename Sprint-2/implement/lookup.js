function createLookup(countryCurrency) {
  const lookup = {};
  for (const [country, currency] of countryCurrency) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
