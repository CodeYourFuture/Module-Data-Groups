function createLookup(key, value) {
  return Object.fromEntries([[key, value]]);
  // implementation here
  // This function should create an object with one key-value from the provided array by taking as parameter key and value
  // The keys are the country codes
  // The values are the corresponding currency codes

}

module.exports = createLookup;
