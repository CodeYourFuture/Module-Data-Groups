function createLookup(pairs) {
  // implementation here
  const lookup = {};

  for (const [country, currency] of pairs) {
    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;
