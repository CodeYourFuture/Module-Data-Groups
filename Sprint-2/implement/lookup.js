function createLookup(arrayNew) {
  const objNew = {};
  for (let i = 0; i < arrayNew.length; i++) {
    objNew[arrayNew[i][0]] = arrayNew[i][1];
  }

  return objNew;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);
module.exports = createLookup;
