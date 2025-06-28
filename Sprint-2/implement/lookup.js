function createLookup(arr) {
  let object = {};

  if (!Array.isArray(arr) || arr.length < 1) {
    throw new Error(
      "The array is not array or have length less than 2 values."
    );
  }

  for (let i = 0; i < arr.length; i++) {
    // looping through an array to get arrays inside
    // current an array. Using indexing.
    const keyValuePair = arr[i];

    if (!Array.isArray(keyValuePair) || keyValuePair.length !== 2) {
      throw new Error(
        "The arrays inside are not arrays or have length less than 2 values."
      );
    }

    const country_code = keyValuePair[0]; // assigning properties names
    const currency_code = keyValuePair[1];
    if (typeof country_code !== "string" || typeof currency_code !== "string") {
      throw new Error("The type of key-value pair is not string.");
    }
    object[country_code] = currency_code; // populate the empty created earlier object
  }
  return object;
}

const countryCurrencyPairs = [
  ["US", "USD"],
  ["CA", "CAD"],
];
const result = createLookup(countryCurrencyPairs);
console.log(result);

module.exports = createLookup;
