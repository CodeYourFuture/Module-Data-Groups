// the first element is the country code
// the second array is the currency code of the country
// the function should return an object
// the keys of the object should be the first element of each inner array (country code)
// the values of the object should be the second element of each inner array (currency code)

function createLookup(countryCurrencyPairs) {
  // check if the argument is an array of arrays
  if (
    !Array.isArray(countryCurrencyPairs) ||
    // check if each inner array is an array.
    countryCurrencyPairs.some((pair) => !Array.isArray(pair)) ||
    // check if each inner array has two elements.
    countryCurrencyPairs.some((pair) => pair.length !== 2)
    // we can also use index to check the pair is an array as follows:
    // for (let i = 0; i < countryCurrencyPairs.length; i++)
    //  return Array.isArray(countryCurrencyPairs[i])
  ) {
    throw new Error("Invalid input: expected an array of arrays");
  }
  return Object.fromEntries(countryCurrencyPairs);
}

module.exports = createLookup;
