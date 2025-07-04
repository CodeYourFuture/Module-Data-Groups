function createLookup(countryCurrencyPairs) {
  const queryParams = {};
  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const key = countryCurrencyPairs[i][0];
    const value = countryCurrencyPairs[i][1];
    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = createLookup;
