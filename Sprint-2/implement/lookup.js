function createLookup(pairs) {
    const lookup= {};
   for (let [countryCode, currencyCode] of pairs) {
      lookup[countryCode] = currencyCode;
    }
  
    return lookup;
    // implementation here
  }
  // implementation here
}

module.exports = createLookup;
