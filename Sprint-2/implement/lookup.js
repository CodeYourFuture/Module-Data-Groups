function createLookup(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let keyName = arr[i][0];
    let value = arr[i][1];
    result[keyName] = value;
  }
  return result;
}

console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;
