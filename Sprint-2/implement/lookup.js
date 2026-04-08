function createLookup(pairs) {
  if (!Array.isArray(pairs)) return {};
  const lookup = {};

  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) continue;

    const [country, currency] = pair;
    lookup[country] = currency;
  }
  return lookup;
}

module.exports = createLookup;
