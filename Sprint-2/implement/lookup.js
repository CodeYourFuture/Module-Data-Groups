function createLookup(countryCurrencyPairs) {
  const countryCodeCurrency={}
  for (const[country, currency] of countryCurrencyPairs){
   countryCodeCurrency[country]=currency
  }

  return countryCodeCurrency
}

console.log(createLookup([['GB','GBP']]))

module.exports = createLookup;
