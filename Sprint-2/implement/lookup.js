function createLookup(countryCurrencyPairs) {
  const lookup = {};
  countryCurrencyPairs.array.forEach(([country , currency]) => {
    lookup[country] = currency;
    
  });
  return lookup;
}

module.exports = createLookup;
