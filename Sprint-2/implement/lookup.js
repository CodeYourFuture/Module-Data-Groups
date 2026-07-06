function createLookup(countryCurrencyPairs) {
  let newObj = {};
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Input must be an array");
  }

  countryCurrencyPairs.forEach((pair) => {
    if (Array.isArray(pair) && pair.length === 2) {
      newObj[pair[0]] = pair[1];
    }
  });
  return newObj;
}

module.exports = createLookup;
