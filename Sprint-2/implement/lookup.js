
function createLookup(pairs) {
  const lookup = {};
  if (!Array.isArray(pairs)) return lookup;
  for (const pair of pairs) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [country, currency] = pair;
      lookup[country] = currency;
    }
  }
  return lookup;
}

module.exports = createLookup;
