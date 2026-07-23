function createLookup(countryCurrencyParis) {
  // implementation here
  const lookup = {};

  for (const pair of countryCurrencyParis) {
    const countryCode = pair[0];
    const currencyCode = pair[1];

    lookup[countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup;
