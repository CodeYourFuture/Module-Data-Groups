function createLookup(pairs) {
  const lookup = {};
  for (const [country, currency] of pairs) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
