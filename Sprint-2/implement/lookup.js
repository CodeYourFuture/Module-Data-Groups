function createLookup(countryCurrencyPairs) {
  //if countryCurrencyPairs is not an array, throw error
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Invalid input. It should be an array");
  }
  //if it is an empty array, throw error
  if (countryCurrencyPairs.length === 0) {
    throw new Error("Input should not be an empty array");
  }

  //if not all elements are an array in the array, throw an error
  if (!countryCurrencyPairs.every(Array.isArray)) {
    throw new Error("Invalid input. All elements should be arrays");
  }

  return Object.fromEntries(countryCurrencyPairs);
}

module.exports = createLookup;

// console.log(
//   createLookup([
//     ["US", "USD"],
//     ["CA", "CAD"],
//   ])
// );

// console.log(createLookup([]));

/*
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
