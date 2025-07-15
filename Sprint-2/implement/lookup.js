function createLookup(pairs) {
  const result = {};

  for (const [countryCode, currencyCode] of pairs) {
    result[countryCode] = currencyCode;
  }

  return result;
}

module.exports = createLookup;
