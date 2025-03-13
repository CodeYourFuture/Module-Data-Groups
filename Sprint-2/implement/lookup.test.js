
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

function createLookup(arr, key) {
  const lookup = {}; 
  // initialize an empty object to store the lookup table

  // loop through each object in the input array.
  Array.forEach(item => {
  // assign the value of the specified key from the object as the lookup key.
  // and store the  entire object as the corresponding value
  lookup[item[key]] = item;

  })

  return lookup; 
  // needed to return the completed lookup table.
  
}

module.exports = createLookup;
