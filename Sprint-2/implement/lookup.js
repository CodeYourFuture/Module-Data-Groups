function createLookup(countryCurrencyPairs) {
  const lookup = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const [country, currency] = countryCurrencyPairs[i];

    lookup[country] = currency;
  }

  return lookup;
}

module.exports = createLookup;
