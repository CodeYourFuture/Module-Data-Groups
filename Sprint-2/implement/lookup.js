function createLookup(countryCodes) {
  // implementation here
  const countryCodeAndCurrency = {};
  //Iterating over the array to access the inner arrays and assign the item as key value pairs
  for(const item of countryCodes){
    countryCodeAndCurrency[item[0]] = item[1]
  }
  return countryCodeAndCurrency;
}
// console.log(createLookup([["US", "USD"],["CA", "CAD"]])
);

module.exports = createLookup;
