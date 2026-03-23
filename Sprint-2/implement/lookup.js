function createLookup(arrayOfArrays) {
  // implementation here
  const lookUpObject = {};
  for (const innerArray of arrayOfArrays) {
    keyPair = innerArray[0];
    valuePair = innerArray[1];
    lookUpObject[keyPair] = valuePair;
  }
  return lookUpObject;
}

module.exports = createLookup;
