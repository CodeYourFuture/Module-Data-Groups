function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }

  const lookupObject = {};

  for (const [country, currency] of countryCurrencyPairs) {
    lookupObject[country] = currency;
  }

  return lookupObject;
}

module.exports = createLookup;
