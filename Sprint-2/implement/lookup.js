function createLookup(countryCurrencyPairs) {
  const pairs = {};                                             // Initialise an empty object expecting input to be an array of pairs

  for (const [country, currency] of countryCurrencyPairs) {     // Loops through each pair, using array destructuring ([country, currency]) to extract the two values.
    pairs[country] = currency;                                  // Assigns each country code key to the currency code value in the pairs object, adding a new property.
  }

  return pairs; 
}

module.exports = createLookup;

// const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD'], ['PL', 'PLN'], ['GB', 'GBP'], ['KE', 'KES'], ['SA', 'SAR'], ['TH', 'THB']];
// console.log(createLookup(countryCurrencyPairs));


