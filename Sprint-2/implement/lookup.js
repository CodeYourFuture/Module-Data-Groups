function createLookup(countryCurrencyPairs) {
   const lookup = {};

   for (const pair of countryCurrencyPairs) {
     const countryCode = pair[0];
     const currencyCode = pair[1];
     lookup[countryCode] = currencyCode;
   }

   return lookup;
}

module.exports = createLookup;
