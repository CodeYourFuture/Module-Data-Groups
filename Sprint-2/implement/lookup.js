function createLookup(countryCurrencyPairs) {
  return Object.fromEntries(countryCurrencyPairs)
}

const arr =  [['US', 'USD'], ['CA', 'CAD']]
console.log(createLookup(arr));

module.exports = createLookup;
