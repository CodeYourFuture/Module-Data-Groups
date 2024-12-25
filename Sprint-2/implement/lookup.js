function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {}; // Return an empty object if the input is not a valid array
  }

  return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    lookup[country] = currency;
    return lookup;
  }, {});
}

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;
