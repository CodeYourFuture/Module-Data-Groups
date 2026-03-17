function createLookup(countryCurrencyPairs) {
  const countryCurrencyLookup = {};

  for (let item of countryCurrencyPairs) {
    const [key, value] = [item[0], item[1]];
   countryCurrencyLookup[key] = value;
  }
  return countryCurrencyLookup;
}

module.exports = createLookup;
