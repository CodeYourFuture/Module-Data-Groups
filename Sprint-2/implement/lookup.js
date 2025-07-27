function createLookup(countryCurrencyPairs) {
  const queryParams = {};
  for (const item of countryCurrencyPairs) {
    const key = item[0];
    const value = item[1];
    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = createLookup;
