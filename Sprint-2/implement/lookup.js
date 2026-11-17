function createLookup(countryCurrencies) {
  const currencyLookup = {};

  for (const pair of countryCurrencies) {
    const countryCode = pair[0];
    const currencyCode = pair[1];

    currencyLookup[countryCode] = currencyCode;
  }

  return currencyLookup;
}

module.exports = createLookup;
