function createLookup(pairs) {
  const result = {};
  for (let i = 0; i < pairs.length; i++) {
    const [country, currency] = pairs[i];

    result[country] = currency;
  }
  return result;
}

module.exports = createLookup;
