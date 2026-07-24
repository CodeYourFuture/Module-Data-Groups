function createLookup(pairs) {
  const lookup = {};

  for (let [country, currency] of pairs) {
    lookup[country] = currency;
  }

  return lookup;
  // implementation here
}

module.exports = createLookup;
