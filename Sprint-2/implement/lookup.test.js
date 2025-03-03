
/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
  

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