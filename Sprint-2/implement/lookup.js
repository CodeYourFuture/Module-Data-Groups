function createLookup(nestedArray) {
  // implementation here
  let finalObject = {};

  for (let i = 0; i < nestedArray.length; i++) {
    const key = nestedArray[i][0];
    const value = nestedArray[i][1];
    finalObject[key] = value;
  }
  return finalObject;
}

module.exports = createLookup;
