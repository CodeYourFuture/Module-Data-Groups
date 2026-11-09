function createLookup(pairs) {
  const pairsFound = {};
  for (const pair of pairs) {
    const country = pair[0];
    const currency = pair[1];

    pairsFound[country] = currency;
  }
  return pairsFound;
}

module.exports = createLookup;
