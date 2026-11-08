function createLookup(countryCurrencyPairs) {
  const objCountryCurrencyPairs = {};

  for (const pair of countryCurrencyPairs) {
    objCountryCurrencyPairs[pair[0]] = pair[1];
  }
  
  return objCountryCurrencyPairs;
}

module.exports = createLookup;
