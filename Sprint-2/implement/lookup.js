function createLookup(countryCurrencyPairs) {
  const lookup = {};

  for (const [countryCode, countryCurrency] of countryCurrencyPairs) {
    lookup[countryCode] = countryCurrency;
  }

  return lookup;
}

module.exports = createLookup;


