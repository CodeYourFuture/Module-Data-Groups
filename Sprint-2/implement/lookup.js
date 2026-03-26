function createLookup(pairs) {
  const result = {};
  for (let i = 0; i < pairs.length; i++) {
    const country = pairs[i][0];
    const currency = pairs[i][1];

    result[country] = currency;
  }
  return result;
}

module.exports = createLookup;
