// the first element is the country code
// the second array is the currency code of the country
// the function should return an object
// the keys of the object should be the first element of each inner array (country code)
// the values of the object should be the second element of each inner array (currency code)

function Lookup(coCuPairs) {
  // check if the argument is an array of arrays
  if (
    Array.isArray(coCuPairs) &&
    // check if each inner array is an array.
    coCuPairs.every((pair) => Array.isArray(pair)) &&
    // check if each inner array has two elements.
    coCuPairs.every((pair) => pair.length === 2)
    // we can also use index to check the pair is an array as follows:
    // for (let i = 0; i < coCuPairs.length; i++)
    //  return Array.isArray(coCuPairs[i])
  ) {
    return Object.fromEntries(coCuPairs);
  }
  return "Invalid input: expected an array of arrays";
}

module.exports = Lookup;
