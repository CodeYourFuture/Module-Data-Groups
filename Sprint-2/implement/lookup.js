function createLookup(pairs) {
  const result = {};
  for (const [country, currency] of pairs) {
    result[country] = currency;
  }
  return result;
}

module.exports = createLookup;
