function createLookup(pairs) {
  // implementation here
  const results = {}; // create an empty object to be able to store results

  // loop through each of the pairs in the array
  for (const [country, currency] of pairs){
    // add new key value pairs to the object "country" is the key and "currency" is the value
    results[country] = currency;
  }

  return results; //  returns the final object that maps each key to the corresponding values
}

module.exports = createLookup;
