function createLookup(inputArray) {
  // implementation here
  const returnObject = {};

  if (Array.isArray(inputArray)) {
    if (inputArray.length === 0) {
      return "passed array was empty, no values to display";
    }

    for (let item of inputArray) {
      returnObject[item[0]] = item[1];
    }

    return returnObject;
  } else {
    throw new Error("error incorrect parameter passed please provide an array");
  }
}

module.exports = createLookup;
