function createLookup(countryCurrencyPairs) {
  return countryCurrencyPairs.reduce((lookup, pair) => {
    const [country, currency] = pair; // Destructure the array into country and currency
    lookup[country] = currency; // Assign the currency to the country code in the object
    return lookup; // Return the updated lookup object
  }, {}); // Initialize the accumulator as an empty object
}

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]))

//test cases with assertion

//test 1
console.assert(JSON.stringify(createLookup([['US', 'USD'], ['CA', 'CAD']])) === JSON.stringify({
  'US': 'USD',
  'CA': 'CAD'
}),"test 1 failed")
module.exports = createLookup;
