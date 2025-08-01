const countryCurrency = [["MAR","MAD"],["UK","GBP"],["US","USD"]]


function createLookup(dataCurrency) {
  
 return dataCurrency.reduce((acc,entry) => {
  const [countryCode,currencyCode]=entry
  acc[countryCode]= currencyCode
  return acc
 },{})
}

console.log(createLookup(countryCurrency))
module.exports = createLookup;
