function createLookup(pairs) {
  const result = {};
  for (const [country, currency] of pairs) {
    result[country] = currency;
  }
  return result;
}


// Example usage:
 //const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
 //const lookup = createLookup([['US', 'USD'],['CA', 'CAD']]);
 //console.log(lookup); // { US: 'USD', CA: 'CAD' }

 module.exports = createLookup;