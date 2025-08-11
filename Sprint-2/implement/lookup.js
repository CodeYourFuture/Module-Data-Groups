function createLookup(nestedArray) {
  let object = {};
  for (let i = 0; i < nestedArray.length; i++) {
    object[nestedArray[i][0]] = nestedArray[i][1];
  }
  return object;
}

module.exports = createLookup;
