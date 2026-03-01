const createLookup = require("./lookup.js");

const  result=createLookup([['US','USD'],['CA','CAD']])
console.log (result)
test.todo("creates a country currency code lookup for multiple codes");

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

// create single country currency in countryCurrencyPairs
const result1=createLookup([['GB','GBP']])
console.log(result1)
test.todo('creates a single county code currency ')

//given an empty country currency pair/array
console.log(createLookup([[]]))
test.todo('return an empty object with empty pair given')