function createLookup(countryCurrencyPairs) {
    return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
      lookup[country] = currency;
      return lookup;
    }, {});
  }
const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
console.log(createLookup(countryCurrencyPairs));
module.exports = createLookup;
