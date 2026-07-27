function createLookup(countryCurrencyPairs) {
  // implementation here
  const currencyPairs = {};
  for (const innerPair of countryCurrencyPairs) {
    const [key, value] = innerPair;
    currencyPairs[key] = value;
  }
  return currencyPairs;
}
module.exports = createLookup;
