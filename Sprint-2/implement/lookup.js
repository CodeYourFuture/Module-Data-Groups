function createLookup(countryCurrencyPairs) {
  let lookup = {}; //begins with an empty object to populate

  for (let pair of countryCurrencyPairs) {
    let country = pair[0];   
    let currency = pair[1];

    lookup[country] = currency;
  }
//this iterates through all pairs returning them into the created empty object
  return lookup; 
}

module.exports = createLookup;
