function createLookup(pairs) {
  const lookup = {};

  for (const pair of pairs) {
    const countryCode = pair[0];
    const currencyCode = pair[1];

    lookup[countryCode] = currencyCode;
  }
  return lookup;
}

module.exports = createLookup;
