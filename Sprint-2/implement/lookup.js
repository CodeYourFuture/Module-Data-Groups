function createLookup(array) {
  const currency = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];
  const countryCurrency = {};
  if (array.length == 0) {
    return {};
  } else {
    countryCurrency[currency[0][0]] = array[0];
    return countryCurrency;
  }
}

module.exports = createLookup;
