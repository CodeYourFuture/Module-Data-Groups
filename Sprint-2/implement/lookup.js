function createLookup(countryCurrencyPairs) {// is the parameter of the function 
  return Object.fromEntries(countryCurrencyPairs);// Object.
}

module.exports = createLookup;
