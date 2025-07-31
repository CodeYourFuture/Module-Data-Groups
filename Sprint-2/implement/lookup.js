function createLookup(countryCurrencyPairs) {
  if (countryCurrencyPairs.length == 0){
    return "array is empty"
  }
  let countryCurrencyObject = {}
  for (const array of countryCurrencyPairs){
    countryCurrencyObject[array[0]] = array[1];
  }
  return countryCurrencyObject;
}

module.exports = createLookup;
