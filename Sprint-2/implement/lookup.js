function createLookup(pairs) {
   let lookup = {};

   for(const[countryCode, currencyCode] of pairs){
    lookup[countryCode] = currencyCode;
   }
   return lookup;
}

module.exports = createLookup;

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));