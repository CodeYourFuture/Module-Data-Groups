function createLookup(countryCurrencyPairs) {
  let lookUp = {};
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Input must be an array of arrays");
  }
  countryCurrencyPairs.forEach(pair => {
    if (Array.isArray(pair) && pair.length === 2) {
      lookUp[pair[0]] = pair[1];
    } else {
      throw new Error("Each element of the input array must be an array of two elements");
    }
  });

  return lookUp;
}

module.exports = createLookup;
