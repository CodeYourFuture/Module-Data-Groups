function createLookup(inputArray) {
  // implementation here
  const returnObject = {};

  if (!Array.isArray(inputArray)) {
    throw new Error("error incorrect parameter passed please provide an array");
  }

  if (inputArray.length === 0) {
    return returnObject;
  }

  for (let item of inputArray) {
    returnObject[item[0]] = item[1];
  }

  return returnObject;
}

module.exports = createLookup;
