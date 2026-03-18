function createLookup(array) {
  let object = {};
  for (const pair of array) {
    object[pair[0]] = pair[1];
  }
  return object
}

module.exports = createLookup;

