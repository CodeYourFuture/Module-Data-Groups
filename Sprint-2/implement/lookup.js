function createLookup(countryCurrencyPairs) {
  const lookUp = {};
  for (const item of countryCurrencyPairs) {
    lookUp[item[0]] = item[1];
  }
  return lookUp;
}

module.exports = createLookup;
