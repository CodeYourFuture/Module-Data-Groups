
/*exercises learning =const countries= [
  {id:1, countryName: 'US, USD'},
  {id:1, countryName: 'CA, CAD'},
  {id:1, countryName: 'BR", BRZ'}
]

console.log(countries.find (function(countries){
  return countries.countryName == 'US, USD'
}))
const countries = [
  { id: 1, countryName: "US, USD" },
  { id: 1, countryName: "CA, CAD" },
  { id: 1, countryName: 'BR", BRZ' },
];

console.log(
  countries.find( countries => countries.countryName == 'CA, CAD'))*/

// Array of country and currency pairs

const countryCurrencyPairs = [
  ['US', 'USD'],  
  ['CA', 'CAD'],  
  ['GB', 'GBP'],  
  ['JP', 'JPY'],  
  ['EU', 'EUR'],  
  ['IN', 'INR'],  
  ['BR', 'BRL'],  
  ['AU', 'AUD'],  
];

// Function to create a lookup table from country and currency pairs
function createLookup(countryCurrencyPairs) {
  // Start with an empty object
  const lookup = {};

  // Loop through each pair in the array
  countryCurrencyPairs.forEach(pair => {
    const [country, currency] = pair; // Destructure the pair into country and currency
    lookup[country] = currency; // Add the country as the key and the currency as the value
  });

  // Return the completed lookup object
  return lookup;
}

// Use the function to create a currency lookup
const currencyLookup = createLookup(countryCurrencyPairs);

// Access currency values using the lookup table
console.log(currencyLookup['US']); // Output: USD
console.log(currencyLookup['IN']); // Output: INR


module.exports = createLookup;
