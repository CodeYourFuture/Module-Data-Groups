function createLookup(countryCurrencyPairs) {
  // Ensure the input parameter is valid
  if (!Array.isArray(countryCurrencyPairs)) {
    throw new Error("Invalid input: expected an array");
  }

  let lookup = {};

  // let me Iterate through the array of pairs
  // for (let i = 0; i < countryCurrencyPairs.length; i++) {
  //   const [country, currency] = countryCurrencyPairs[i];
  //   lookup[country] = currency; // Add key-value pair to the lookup object
  // }
for(let [country, currency] of countryCurrencyPairs){
  lookup[country] =currency;
}
  return lookup;
}

module.exports = createLookup;
