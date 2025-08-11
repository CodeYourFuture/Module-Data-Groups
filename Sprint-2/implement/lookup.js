function createLookup(countryCurrencyPairs) {
  // Use reduce to build the lookup object
  return countryCurrencyPairs.reduce((lookup, [countryCode, currencyCode]) => {
    lookup[countryCode] = currencyCode; // Add key-value pair to the object
    return lookup;
  }, {});
}
module.exports = createLookup;
