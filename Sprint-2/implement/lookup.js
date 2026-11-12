function createLookup(countryCurrencyPairs) {
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("createLookup requires an array");
  }
  for (const keyVlauePairs of countryCurrencyPairs) {
    if (!Array.isArray(keyVlauePairs)) {
      throw new Error("createLookup requires an array of key value pair");
    } else if (keyVlauePairs.length !== 2) {
      throw new Error("createLookup requires key value pair");
    } else if (keyVlauePairs.some((element) => typeof element !== "string")) {
      throw new Error("createLookup requires a string of key value pair");
    }
  }

  let currencyObject = {};
  for (const arrayCurrency of countryCurrencyPairs) {
    currencyObject[arrayCurrency[0]] = arrayCurrency[1];
  }
  return currencyObject;
}

module.exports = createLookup;
