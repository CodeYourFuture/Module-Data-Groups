function createLookup(countryCurrencyPairs) {
  const lookup = {};

  for (const pair of countryCurrencyPairs) {
       lookup[pair[0]] = pair[1];
  }
  return lookup;
}

module.exports = createLookup;
