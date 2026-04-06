function createLookup(countryCurrencyPairs) {
  // implementation here

  const lookup = {};
  for (const [key, value] of countryCurrencyPairs) {
    lookup[key] = value;
  }
  return lookup;
}

module.exports = createLookup;
