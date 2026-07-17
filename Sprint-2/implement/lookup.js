function createLookup(pairs) {
  const countryCurrencyObj = {};

  pairs.forEach(([countryCode, currencyCode]) => {
    countryCurrencyObj[countryCode] = currencyCode;
  });
  return countryCurrencyObj;
}

module.exports = createLookup;
