function createLookup(countryCodes) {
  // implementation here
  const countryCodeAndCurrency = {};
  for(const item of countryCodes){
    countryCodeAndCurrency[item[0]] = item[1]
  }
  return countryCodeAndCurrency;
}
console.log(createLookup([["US", "USD"],["CA", "CAD"]])
);

module.exports = createLookup;
