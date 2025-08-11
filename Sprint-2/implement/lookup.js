function createLookup(countryCurrencyPairs) {

  const obj =  Object.fromEntries(countryCurrencyPairs);

  return obj ;
};

module.exports = createLookup;
