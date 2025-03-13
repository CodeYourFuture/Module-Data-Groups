

function createLookup(countryCurrencyPairs) {
  const createLookup = {};
  // create an empty object to hold the key-value pairs

  // loop through each country-currency pair in the array
  countryCurrencyPairs.forEach(pair => {
    const [countryCode, currencyCode] = pair;
  // Destructure each pair into countryCode and currencyCode
  lookup[countryCode] = currencyCode;
  // store the country code as the key and currency code as the value

  });

  return lookup; 

  // return the constructed lookup object

}

module.exports = createLookup;



