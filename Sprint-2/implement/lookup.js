function createLookup(countryCurrencyPairs) {
  const countryCurrencyLookup = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const country = countryCurrencyPairs[i][0];
    const currency = countryCurrencyPairs[i][1];

    countryCurrencyLookup[country] = currency;
  }

  return countryCurrencyLookup;
}

module.exports = createLookup;
