function createLookup(pairs) {
  const lookup = {};
  pairs.forEach(([country, currency]) => {
    lookup[country] = currency;
  });
  return lookup;
}

module.exports = createLookup;
