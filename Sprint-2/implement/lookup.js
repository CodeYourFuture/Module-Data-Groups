function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((acc,[country,currency]) => {
    acc[country] = currency;
    return acc;
}, {});
  
}

module.exports = createLookup;




