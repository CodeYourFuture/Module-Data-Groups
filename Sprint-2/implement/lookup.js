function createLookup(arr) {
  // const arr1 =
  // const arr2 =
  for (let i = 0; i < arr.length; i++) {
    let newArray = countryCurrencyPairs[i];
    console.log(newArray);
  }
  return newArray;
}

const countryCurrencyPairs = [
  ["US", "USD"],
  ["CA", "CAD"],
];
const result = createLookup(countryCurrencyPairs);
module.exports = createLookup;
