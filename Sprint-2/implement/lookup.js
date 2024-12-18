
function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    return {};
  }

  const currencyLookup = {};

  countryCurrencyPairs.forEach(pair => {
    const [country, currency] = pair; 
    currencyLookup[country] = currency; 
  });

 
  return currencyLookup;

}

const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
const result = createLookup(countryCurrencyPairs);
console.log(result);


module.exports = createLookup;
