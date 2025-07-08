function createLookup(pairs) {
  const output = {};
  for (const [country, currency] of pairs) {
    output[country] = currency;
  }
  return output;
}

module.exports = createLookup;

