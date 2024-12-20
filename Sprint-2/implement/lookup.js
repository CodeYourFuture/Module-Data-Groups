function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {}; 
}


return countryCurrencyPairs.reduce((lookup, [country, currency]) => {
    lookup[country] = currency; 
    return lookup; 
}, {});
}


module.exports = createLookup;
