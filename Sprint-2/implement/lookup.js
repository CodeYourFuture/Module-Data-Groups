// 〰️ Function to create a lookup object from an array of country-currency pairs
function createLookup(countryCurrencyPairs) {
  // 〰️ Use Object.fromEntries to transform the array into an object
  return Object.fromEntries(countryCurrencyPairs);
}

console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
console.log(createLookup([['IN', 'INR'], ['JP', 'JPY']]));
console.log(createLookup([]));

module.exports = createLookup;


// 〰️ Explanation of Object.fromEntries():
// 〰️ Object.fromEntries() is a built-in JavaScript method that converts an array of key-value pairs into an object. It's particularly useful when you have data in array format and want to convert it into an object without using loops or more complex methods like reduce().

// 〰️ How It Works:
//   〰️ 1. It expects an array where each element is a two-item array representing [key, value].
//   〰️ 2.It processes each pair and adds the key-value pair to a new object.
//   〰️ 3.It returns the resulting object.

// 〰️ Since createLookup takes an array of pairs, using Object.fromEntries() makes the conversion simple and clean.
