function createLookup(countryCurrencyPairs) {
  const lookup = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const countryCode = countryCurrencyPairs[i][0];
    const currencyCode = countryCurrencyPairs[i][1];

    lookup[countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup;
