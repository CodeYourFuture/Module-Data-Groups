function createLookup(nestedArray) {
  let lookup = {};
  for (let i = 0; i < nestedArray.length; i++) {
    let key = nestedArray[i][0];
    let value = nestedArray[i][1];
    lookup[key] = value;
  }
  return lookup;
}
module.exports = createLookup;
