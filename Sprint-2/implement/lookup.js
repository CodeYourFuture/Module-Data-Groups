function createLookup() {
   const lookup = {};

  countryCurrencyPairs.forEach(pair => {
    lookup[pair[0]] = pair[1];
  });

  return lookup;
}

module.exports = createLookup;
