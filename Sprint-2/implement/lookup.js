function createLookup(pairs) {
  // Validate input: must be an array of arrays
  if (!Array.isArray(pairs)) {
    return {};
  }

  const lookup = {};
  for (const [country, currency] of pairs) {
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;

