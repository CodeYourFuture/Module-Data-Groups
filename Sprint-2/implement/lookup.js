function createLookup(nestedArr) {
  const noneNesArr = nestedArr.flat(Infinity);
  const result = {};
  for (let i = 0; i < noneNesArr.length; i += 2) {
    const country = noneNesArr[i];
    const currency = noneNesArr[i + 1];
    result[country] = currency;
  }
  return result;
}
createLookup([
  ["US", "USD"],
  ["CA", "CAD"],
]);
module.exports = createLookup;
