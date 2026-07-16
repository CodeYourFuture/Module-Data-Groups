function createLookup(countryCurrencyPairs) {
  const keyValuePairs = Object.fromEntries(countryCurrencyPairs);
  return keyValuePairs;
}

module.exports = createLookup;
