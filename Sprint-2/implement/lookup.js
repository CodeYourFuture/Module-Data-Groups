function createLookup(countryCurrencyPairs) {
    if (!Array.isArray(countryCurrencyPairs) || 
      !countryCurrencyPairs.every(pair => Array.isArray(pair))) {
    throw new Error("Invalid input: Must be an array of arrays.");
  }
 const lookup = {};

  for (let pair of countryCurrencyPairs) {
     if (pair.length !== 2) {
      throw new Error(`Invalid pair: Each pair must contain exactly two elements. Found: ${JSON.stringify(pair)}`);
    }
    const [country, currency] = pair;
      if (lookup.hasOwnProperty(country)) {
      throw new Error(`Duplicate country code detected: '${country}'`);
    }
    lookup[country] = currency; 
  }

  return lookup;
}


console.log(createLookup([['US', 'USD'], ['CA', 'CAD']])); 

module.exports = createLookup;
