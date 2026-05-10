// check if arry is 2d, and each element is a k,v pair and k,v both strings
function isValidCountryCurrencyPair(arr) {
  return (
    Array.isArray(arr) &&
    arr.every((element) => {
      return (
        Array.isArray(element) &&
        element.length === 2 &&
        typeof element[0] === "string" &&
        typeof element[1] === "string"
      );
    })
  );
}

function createLookup(countryAndCurrency) {
  // bit lazy, should have tests for type, and content seperately,
  // to throw more specific errors
  if (!isValidCountryCurrencyPair(countryAndCurrency)) {
    throw new Error("Input is not valid type and/or format");
  }
  return Object.fromEntries(countryAndCurrency);
}

module.exports = createLookup;
