function createLookup(pairs) {
  if (!Array.isArray(pairs)) {
    return {};
  }

  const lookup = {};

  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length < 2) {
      continue;
    }

    const [countryCode, currencyCode] = pair;
    lookup[countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup;
