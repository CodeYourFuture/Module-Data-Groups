function createLookup(array) {
  const currency = [
    ["EU", "EUR"],
    ["US", "USD"],
    ["CA", "CAD"],
    ["ERI", "NAK"],
  ];
  const countryCurrency = {};
  if (array.length == 0) {
    return {};
  } else {
    for (let i = 0; i < currency.length; i++) {
      for (let j = 0; j < currency.length; j++) {
        if (currency[i][1] === array[j]) {
          countryCurrency[currency[i][0]] = array[j];
        }
      }
    }
    return countryCurrency;
  }
}
module.exports = createLookup;
