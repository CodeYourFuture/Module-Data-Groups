function createLookup(array) {
  const countryCurrencyObject = {};
  for (const index in array) {
    countryCurrencyObject[array[index][0]] = array[index][1]
  };
  return countryCurrencyObject
};

module.exports = createLookup;
